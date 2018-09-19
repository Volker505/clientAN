import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as MainState from '../../core/store/reducers';

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss']
})
export class DescriptionSectionComponent implements OnInit {



  constructor(private store: Store<MainState.MainState>) { }

  ngOnInit() {
    this.store.pipe(select(MainState.getSections)).subscribe(data => console.log(data));
  }

}
