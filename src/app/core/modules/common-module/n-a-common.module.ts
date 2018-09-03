import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NaResource} from '../../services/an-resource/na-resource';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NaResource
  ],
  exports: [],
  declarations: []
})
export class NACommonModule { }
