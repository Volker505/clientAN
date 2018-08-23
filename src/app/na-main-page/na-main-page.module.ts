import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaMainPageRoutingModule } from './na-main-page-routing.module';
import { NaMainPageComponent } from './na-main-page.component';

@NgModule({
  imports: [
    CommonModule,
    NaMainPageRoutingModule
  ],
  declarations: [NaMainPageComponent]
})
export class NaMainPageModule { }
