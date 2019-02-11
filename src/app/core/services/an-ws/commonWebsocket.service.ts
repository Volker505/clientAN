import {Injectable} from '@angular/core';
import {AnWebsocketService} from './an-websocket.service';


@Injectable({ providedIn: 'root'})
export class CommonWebsocketService {

  constructor(anWebsocketService: AnWebsocketService){
  }



}
