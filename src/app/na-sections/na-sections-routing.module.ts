import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NaSectionsComponent} from './na-sections.component';

const routes: Routes = [
  {path: '', component: NaSectionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaSectionsRoutingModule {
}
