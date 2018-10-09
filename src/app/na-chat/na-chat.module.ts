import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaChatComponent } from './na-chat.component';
import {NaChatRoutingModule} from './na-chat-routing.module';
import {NaCommonModule} from '../core/modules/common-module/na-common.module';

@NgModule({
  imports: [
    CommonModule,
    NaCommonModule,
    NaChatRoutingModule
  ],
  declarations: [NaChatComponent]
})
export class NaChatModule { }
