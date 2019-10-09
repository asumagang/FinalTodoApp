import { Injectable } from '@angular/core';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
id:number;
  todoData=[
    {
      id:1,
      name:"Kaon",
      description:"munganga",
      status:"pending",
      owner:"1"
    },
    {
      id:2,
      name:"Tulog",
      description:"munganga",
      status:"done",
      owner:"2"
    },
    {
      id:3,
      name:"Libang",
      description:"munganga",
      status:"pending",
      owner:"3"
    },
    {
      id:4,
      name:"Magbuhat Assignment",
      description:"12:00 AM sa gabie",
      status:"pending",
      owner:"1"
    }
  ]
getTodos(){
  return this.todoData  
}
addedtodos:any;
  addUsers(todo: Todos) {
    for(let i=1;i<=this.todoData.length+1;i++){
      this.id=i;
    }
    todo.id=this.id;
   this.addedtodos =this.getTodos().push(todo);
    return this.addedtodos;
  }
  
}
