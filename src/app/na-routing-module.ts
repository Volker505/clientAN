import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NaAuthComponent} from './na-auth/na-auth.component';
import {NaMainPageModule} from './na-main-page/na-main-page.module';
import {NaSectionsModule} from './na-sections/na-sections.module';
import {NaUserModule} from './na-user/na-user.module';
import {NaChatModule} from './na-chat/na-chat.module';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: NaAuthComponent, pathMatch: 'full'},
    {path: 'main', loadChildren: () => NaMainPageModule},
    {path: 'sections', loadChildren: () => NaSectionsModule},
    {path: 'user', loadChildren: () => NaUserModule},
    {path: 'chat', loadChildren: () => NaChatModule},

  ])],
  exports: [RouterModule]
})

export class NaRoutingModule {
}
