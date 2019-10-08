import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoslistComponent } from './todoslist/todoslist.component';
import { TodosRoutingModule } from './todos-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodoslistComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ]
})
export class TodosModule { }
