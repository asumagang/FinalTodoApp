import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoslistComponent } from './todoslist/todoslist.component';
import { TodosRoutingModule } from './todos-routing.module';
import { FormsModule } from '@angular/forms';
import { AddtodoModalComponent } from './addtodo-modal/addtodo-modal.component';
import { DeletetodoModalComponent } from './deletetodo-modal/deletetodo-modal.component';



@NgModule({
  declarations: [TodoslistComponent, AddtodoModalComponent, DeletetodoModalComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule
  ],
  entryComponents:[
    DeletetodoModalComponent
  ]
})
export class TodosModule { }
