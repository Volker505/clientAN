import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaMainPageRoutingModule } from './na-main-page-routing.module';
import { NaMainPageComponent } from './na-main-page.component';
import {NaCommonModule} from '../core/modules/common-module/na-common.module';

@NgModule({
  imports: [
    CommonModule,
    NaCommonModule,
    NaMainPageRoutingModule
  ],
  declarations: [NaMainPageComponent]
})
export class NaMainPageModule { }
