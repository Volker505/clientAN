import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaSectionsComponent } from './na-sections.component';
import {NaCommonModule} from '../core/modules/common-module/na-common.module';
import { DescriptionSectionComponent } from './description-section/description-section.component';
import {NaSectionsRoutingModule} from './na-sections-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NaCommonModule,
    NaSectionsRoutingModule
  ],
  declarations: [NaSectionsComponent, DescriptionSectionComponent],
  exports: [
    NaSectionsComponent
  ]
})
export class NaSectionsModule { }
