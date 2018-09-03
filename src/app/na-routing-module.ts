import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {NaMainPageComponent} from './na-main-page/na-main-page.component';
import {NaAuthComponent} from './na-auth/na-auth.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: NaAuthComponent, pathMatch: 'full'},

  ])],
  exports: [RouterModule]
})

export class NaRoutingModule {
}
