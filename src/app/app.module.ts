import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NaRoutingModule} from './na-routing-module';
import {NaMainPageModule} from './na-main-page/na-main-page.module';
import {NaCommonModule} from './core/modules/common-module/na-common.module';
import {NaAuthModule} from './na-auth/na-auth.module';
import {NaSectionsModule} from './na-sections/na-sections.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NaCommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NaRoutingModule,
    NaMainPageModule,
    NaAuthModule,
    NaSectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
