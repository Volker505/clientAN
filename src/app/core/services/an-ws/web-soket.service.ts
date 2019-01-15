import {Injectable} from '@angular/core';
import {WebSocketSubject} from 'rxjs/webSocket';
import {Observable, Subject, Subscription} from 'rxjs';


@Injectable({ providedIn: 'root'})
export class WebSoketService {

  protected ws$: WebSocketSubject<Object>;
  private socket: Subscription;
  protected url: string;

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

    this.ws$.subscribe(
      {
        next: (data: MessageEvent) => {
          if (data['type'] == 'pingStart') {
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
          }, 5000);

        },
        complete: () => {
          this.message.next({type: 'closed'});
        }
      }
    );

  }


}
