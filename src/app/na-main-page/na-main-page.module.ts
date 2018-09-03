import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaMainPageRoutingModule } from './na-main-page-routing.module';
import { NaMainPageComponent } from './na-main-page.component';
import {NACommonModule} from '../core/modules/common-module/n-a-common.module';

@NgModule({
  imports: [
    CommonModule,
    NACommonModule,
    NaMainPageRoutingModule
  ],
  declarations: [NaMainPageComponent]
})
export class NaMainPageModule { }
