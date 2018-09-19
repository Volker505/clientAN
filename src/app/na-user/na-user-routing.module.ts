import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NaUserComponent} from './na-user.component';

const routes: Routes = [
  {path: '', component: NaUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaUserRoutingModule {
}
