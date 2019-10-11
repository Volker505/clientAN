import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {CommonWSService} from '../core/services/an-webSocket/common-ws.service';

@Component({
  selector: 'app-na-chat',
  templateUrl: './na-chat.component.html',
  styleUrls: ['./na-chat.component.scss']
})
export class NaChatComponent implements OnInit {

  constructor(private webSocketService: CommonWSService) { }

  ngOnInit() {
    this.webSocketService.on('newMsg').subscribe(data => console.log(data));
  }

  onmsg(){
    this.webSocketService.send('onMessege', {a: Math.random()});
  }

  onconnectRoom() {
    this.webSocketService.send('onEnterRoom', {id: 1111});
  }

}
