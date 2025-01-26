import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { WebSocketMessegeingComponent } from './web-socket-messegeing/web-socket-messegeing.component';

const routes: Routes = [
  { path: '', redirectTo: 'websocket', pathMatch: 'full' }, // Default route
  { path: 'crud', component: CrudComponent }, // CRUD Component
  { path: 'websocket', component: WebSocketMessegeingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
