import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaUserComponent } from './na-user.component';
import {NaCommonModule} from '../core/modules/common-module/na-common.module';
import {NaUserRoutingModule} from './na-user-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    NaCommonModule,
    NaUserRoutingModule
  ],
  declarations: [NaUserComponent, EditProfileComponent]
})
export class NaUserModule { }
