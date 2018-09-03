import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NaRoutingModule} from './na-routing-module';
import {NaMainPageModule} from './na-main-page/na-main-page.module';
import {NACommonModule} from './core/modules/common-module/n-a-common.module';
import {NaAuthModule} from './na-auth/na-auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NACommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NaRoutingModule,
    NaMainPageModule,
    NaAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
