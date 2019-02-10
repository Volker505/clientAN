import {Injectable} from '@angular/core';
import {WebSocketSubject} from 'rxjs/webSocket';
import {Subject, Subscription} from 'rxjs';
import {environment} from '../../../../environments/environment';


@Injectable({ providedIn: 'root'})
export class WebSoketService {

  protected ws$: WebSocketSubject<Object>;
  private socket: Subscription;
  protected url: string = environment.wsHost;

  public message: Subject<Object> = new Subject();
  public opened: Subject<boolean> = new Subject();


  public sendMSG (message: Object){
    this.message.next(message);
  }

  public close (){
    this.socket.unsubscribe();
    this.ws$.complete();
  }

  public start(url: string){
    let self = this;

    this.url = url;

    this.ws$ = new WebSocketSubject(url);
    console.log(11111, this.ws$);

    this.ws$.subscribe(
      {
        next: (data: MessageEvent) => {

          if (data['type'] == 'event') {
            self.opened.next(true);
          }
          this.message.next(data);
        },
        error: () => {

          self.opened.next(false);
          this.message.next({type: 'closed'});

          self.socket.unsubscribe();

          setTimeout(() => {
            self.start(self.url);
          }, 2000);

        },
        complete: () => {
          this.message.next({type: 'closed'});
        }
      }
    );

  }



  ////////////

//   private config: WebSocketSubjectConfig<IWsMessage<any>>;
//
//   private websocketSub: SubscriptionLike;
//   private statusSub: SubscriptionLike;
//
//   private reconnection$: Observable<number>;
//   private websocket$: WebSocketSubject<IWsMessage<any>>;
//   private connection$: Observer<boolean>;
//   private wsMessages$: Subject<IWsMessage<any>>;
//
//   private reconnectInterval: number;
//   private reconnectAttempts: number;
//   private isConnected: boolean;
//
//
//   public status: Observable<boolean>;
//
//   constructor(@Inject(config) private wsConfig: WebSocketConfig) {
//     this.wsMessages$ = new Subject<IWsMessage<any>>();
//
//     this.reconnectInterval = wsConfig.reconnectInterval || 5000; // pause between connections
//     this.reconnectAttempts = wsConfig.reconnectAttempts || 10; // number of connection attempts
//
//     this.config = {
//       url: wsConfig.url,
//       closeObserver: {
//         next: (event: CloseEvent) => {
//           this.websocket$ = null;
//           this.connection$.next(false);
//         }
//       },
//       openObserver: {
//         next: (event: Event) => {
//           console.log('WebSocket connected!');
//           this.connection$.next(true);
//         }
//       }
//     };
//
//     // connection status
//     this.status = new Observable<boolean>((observer) => {
//       this.connection$ = observer;
//     }).pipe(share(), distinctUntilChanged());
//
//     // run reconnect if not connection
//     this.statusSub = this.status
//       .subscribe((isConnected) => {
//         this.isConnected = isConnected;
//
//         if (!this.reconnection$ && typeof(isConnected) === 'boolean' && !isConnected) {
//           this.reconnect();
//         }
//       });
//
//     this.websocketSub = this.wsMessages$.subscribe(
//       null, (error: ErrorEvent) => console.error('WebSocket error!', error)
//     );
//
//     this.connect();
//   }
//
//   ngOnDestroy() {
//     this.websocketSub.unsubscribe();
//     this.statusSub.unsubscribe(); 777
//   }
//
//
//   /*
//   * connect to WebSocked
//   * */
//   private connect(): void {
//     this.websocket$ = new WebSocketSubject(this.config);
//
//     this.websocket$.subscribe(
//       (message) => this.wsMessages$.next(message),
//       (error: Event) => {
//         if (!this.websocket$) {
//           // run reconnect if errors
//           this.reconnect();
//         }
//       });
//   }
//
//
//   /*
//   * reconnect if not connecting or errors
//   * */
//   private reconnect(): void {
//     this.reconnection$ = interval(this.reconnectInterval)
//       .pipe(takeWhile((v, index) => index < this.reconnectAttempts && !this.websocket$));
//
//     this.reconnection$.subscribe(
//       () => this.connect(),
//       null,
//       () => {
//         // Subject complete if reconnect attemts ending
//         this.reconnection$ = null;
//
//         if (!this.websocket$) {
//           this.wsMessages$.complete();
//           this.connection$.complete();
//         }
//       });
//   }
//
//
//   /*
//   * on message event
//   * */
//   public on<T>(event: string): Observable<T> {
//     if (event) {
//       return this.wsMessages$.pipe(
//         filter((message: IWsMessage<T>) => message.event === event),
//         map((message: IWsMessage<T>) => message.data)
//       );
//     }
//   }
//
//
//   /*
//   * on message to server
//   * */
//   public send(event: string, data: any = {}): void {
//     if (event && this.isConnected) {
//       this.websocket$.next(<any>JSON.stringify({ event, data }));
//     } else {
//       console.error('Send error!');
//     }
//   }
//
// }

}
