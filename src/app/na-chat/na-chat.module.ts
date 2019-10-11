import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaChatComponent } from './na-chat.component';
import {NaChatRoutingModule} from './na-chat-routing.module';
import {NaCommonModule} from '../core/modules/common-module/na-common.module';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    NaCommonModule,
    NaChatRoutingModule,
    // BrowserAnimationsModule,
  ],
  declarations: [NaChatComponent, ChatMessageComponent]
})
export class NaChatModule { }
