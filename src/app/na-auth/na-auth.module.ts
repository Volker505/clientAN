import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NACommonModule} from '../core/modules/common-module/n-a-common.module';
import {NaAuthComponent} from './na-auth.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { NaAuthSocNetComponent } from './na-auth-soc-net/na-auth-soc-net.component';
import { NaRegistrationComponent } from './na-registration/na-registration.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NACommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    NaAuthComponent,
    NaAuthSocNetComponent,
    NaRegistrationComponent
  ],
  exports: [
    NaAuthComponent
  ]
})
export class NaAuthModule { }
