import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {NaMainPageComponent} from './na-main-page/na-main-page.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: NaMainPageComponent, pathMatch: 'full'},

  ])],
  exports: [RouterModule]
})

export class NaRoutingModule {
}
