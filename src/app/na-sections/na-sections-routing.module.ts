import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NaSectionsComponent} from './na-sections.component';
import {DescriptionSectionComponent} from './description-section/description-section.component';

const routes: Routes = [
  {path: '', component: NaSectionsComponent},
  {path: 'section/:id', component: DescriptionSectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaSectionsRoutingModule {
}
