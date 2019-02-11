import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {AnWebsocketService} from '../core/services/an-ws/an-websocket.service';

@Component({
  selector: 'app-na-chat',
  templateUrl: './na-chat.component.html',
  styleUrls: ['./na-chat.component.scss']
})
export class NaChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onmsg(){
  }

}
