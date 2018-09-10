import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-na-sections',
  templateUrl: './na-sections.component.html',
  styleUrls: ['./na-sections.component.scss']
})
export class NaSectionsComponent implements OnInit {

  imgVk: string = '../../../static/vk2.jpg';
  imgHb: string = '../../../static/hb2.jpg';
  imgFb: string = '../../../static/fb2.png';


  constructor() {
  }

  ngOnInit() {
  }

  onMouseOver(n: number) {
    switch (n) {
      case 1: this.imgVk = '../../../static/vk.jpg'; break;
      case 2: this.imgHb = '../../../static/hb.jpg'; break;
      case 3: this.imgFb = '../../../static/fb.png'; break;
    }
  }

  onMouseOut(n: number){
    switch (n) {
      case 1:  this.imgVk = '../../../static/vk2.jpg'; break;
      case 2:  this.imgHb = '../../../static/hb2.jpg'; break;
      case 3:  this.imgFb = '../../../static/fb2.png'; break;

    }
  }

}
