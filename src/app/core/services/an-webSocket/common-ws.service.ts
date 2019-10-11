import {Injectable, OnDestroy} from '@angular/core';
import {IWebsocketService, IWsMessage} from './ws.interface';
import {interval, Observable, Observer, Subject, SubscriptionLike} from 'rxjs';
import {WebSocketConfig} from './ws.config';
import {WebSocketSubject, WebSocketSubjectConfig} from 'rxjs/webSocket';
import {distinctUntilChanged, filter, map, share, takeWhile} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CommonWSService implements IWebsocketService, OnDestroy {

  private config: WebSocketSubjectConfig<IWsMessage<any>>;

  private websocketSub: SubscriptionLike;
  private statusSub: SubscriptionLike;

  private reconnection$: Observable<number>;
  private websocket$: WebSocketSubject<IWsMessage<any>>;
  private connection$: Observer<boolean>;
  private wsMessages$: Subject<IWsMessage<any>>;

  private reconnectInterval: number;
  private reconnectAttempts: number;
  private isConnected: boolean;


  public status: Observable<boolean>;

  constructor() {
  }

  public initWs(config: WebSocketConfig) {
    this.wsMessages$ = new Subject<IWsMessage<any>>();

    this.reconnectInterval = config.reconnectInterval || 5000; // pause between connections
    this.reconnectAttempts = config.reconnectAttempts || 10; // number of connection attempts

    this.config = {
      url: config.url,
      closeObserver: {
        next: (event: CloseEvent) => {
          this.websocket$ = null;
          this.connection$.next(false);
        }
      },
      openObserver: {
        next: (event: Event) => {
          console.log('WebSocket connected!');
          this.connection$.next(true);
        }
      }
    };

    // connection status
    this.status = new Observable<boolean>((observer) => {
      this.connection$ = observer;
    }).pipe(share(), distinctUntilChanged());

    // run reconnect if not connection
    this.statusSub = this.status
      .subscribe((isConnected) => {
        this.isConnected = isConnected;

        if (!this.reconnection$ && typeof (isConnected) === 'boolean' && !isConnected) {
          this.reconnect();
        }
      });

    this.websocketSub = this.wsMessages$.subscribe(
      null, (error: ErrorEvent) => console.error('WebSocket error!', error)
    );

    this.connect();

  }

  private connect() {
    this.websocket$ = new WebSocketSubject(this.config);

    this.websocket$.subscribe(
      (message) => this.wsMessages$.next(message),
      (error) => {
        if (!this.websocket$) {
          this.reconnect();
        }
      }
    );
  }

  private reconnect() {
    this.reconnection$ = interval(this.reconnectInterval)
      .pipe(takeWhile((v, index) => index < this.reconnectAttempts && !this.websocket$));

    this.reconnection$.subscribe(
      () => this.connect(),
      null,
      () => {
        // Subject complete if reconnect attemts ending
        this.reconnection$ = null;

        if (!this.websocket$) {
          this.wsMessages$.complete();
          this.connection$.complete();
        }
      });
  }

  public on<T>(event: string): Observable<T> {
    return this.websocket$.pipe(
      filter(message => message.event === event),
      map(message => message.data)
    );
  }

  public send(event: string, data: any): void {
    if (!this.isConnected) { return console.log('error send msg') }
    this.websocket$.next({event: event, data: data})
  }

  ngOnDestroy(): void {
    this.statusSub.unsubscribe();
    this.websocketSub.unsubscribe();
  }

}
