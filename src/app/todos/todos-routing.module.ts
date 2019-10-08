import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoslistComponent } from './todoslist/todoslist.component';

const routes: Routes = [
  {path: '', component: TodoslistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
