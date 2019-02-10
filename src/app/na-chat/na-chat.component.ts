import { Component, OnInit } from '@angular/core';
import {WebSoketService} from '../core/services/an-ws/web-soket.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-na-chat',
  templateUrl: './na-chat.component.html',
  styleUrls: ['./na-chat.component.scss']
})
export class NaChatComponent implements OnInit {

  constructor(private webSoketService: WebSoketService) { }

  ngOnInit() {
    this.webSoketService.start(environment.wsHost);
  }

  onmsg(){
    this.webSoketService.sendMSG({event: 'event', data: '549999999'});

  }

}
