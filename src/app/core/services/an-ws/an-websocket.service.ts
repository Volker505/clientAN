import {Injectable} from '@angular/core';
import * as SocketIo from 'socket.io-client';
import {environment} from '../../../../environments/environment';
import {Observable, ReplaySubject, Subject} from 'rxjs';


@Injectable({ providedIn: 'root'})
export class AnWebsocketService {

  private socket: SocketIOClient.Socket;
  public connected: Subject<boolean> = new ReplaySubject(1);

  constructor(){
  }

  public connect(serverUrl: string = environment.wsHost){

    // if (!user && this.socket) {
    //   this.socket.disconnect();
    //   this.socket.close();
    //   this.socket = null;
    // }

    this.socket = SocketIo(serverUrl, { query: `userId=${11}`, path: '/chat' });
    this.socket.on('connect', () => this.connected.next(true));
    this.socket.on('reconnect', () => this.connected.next(true));
    this.socket.on('auth:success', res => {
      this.connected.next(true);
      console.log('auth:success', res)
    });
    this.socket.on('error', err => {
      this.connected.next(false);
      console.error('ОШИБКА ПОДКЛЮЧЕНИЯ', err)
    });

    this.socket.on('disconnect', () => this.connected.next(false));
  }

  public emit(eventName: string, data?: any): Promise<any>{
    this.socket.emit(eventName, data);
    return new Promise(res => this.socket.on(eventName, (data) => res(data)))
  }

  public subscribe<T>(eventName: string): Observable<T>{
    return new Observable<T>(observer => {
      this.socket.on(eventName, (data: T) => observer.next(data));
    })
  }

}
