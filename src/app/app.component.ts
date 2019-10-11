import {Component, OnInit} from '@angular/core';
import {CommonWSService} from './core/services/an-webSocket/common-ws.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private webSocketService: CommonWSService) {
  }


  ngOnInit(): void {
    this.webSocketService.initWs({reconnectAttempts: 5, reconnectInterval: 1000, url: 'ws://localhost:8080'});
  }


}
