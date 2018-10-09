import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NaChatComponent} from './na-chat.component';


const routes: Routes = [
  {path: '', component: NaChatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaChatRoutingModule {
}
