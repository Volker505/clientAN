import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NaMainPageComponent} from './na-main-page.component';

const routes: Routes = [
  {path: '', component:NaMainPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaMainPageRoutingModule { }
