import {Component, OnInit} from '@angular/core';
import {WebSoketService} from './core/services/an-ws/web-soket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private wsService: WebSoketService ){
  }


  ngOnInit(): void {
    // this.wsService.start(environmentChat.wsHost);//todo подключение сокетов только после логинизации (user service)
  }


}
