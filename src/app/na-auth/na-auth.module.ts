import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NaCommonModule} from '../core/modules/common-module/na-common.module';
import {NaAuthComponent} from './na-auth.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { NaAuthSocNetComponent } from './na-auth-soc-net/na-auth-soc-net.component';
import { NaRegistrationComponent } from './na-registration/na-registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NaLinckSocNetComponent } from './na-linck-soc-net/na-linck-soc-net.component';

@NgModule({
  imports: [
    CommonModule,
    NaCommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    NaAuthComponent,
    NaAuthSocNetComponent,
    NaRegistrationComponent,
    NaLinckSocNetComponent
  ],
  exports: [
    NaAuthComponent
  ]
})
export class NaAuthModule { }
