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
      owner:"Adrian"
    },
    {
      id:2,
      name:"Tulog",
      description:"munganga",
      status:"done",
      owner:"JR"
    },
    {
      id:3,
      name:"Libang",
      description:"munganga",
      status:"pending",
      owner:"Adrian"
    },
    {
      id:4,
      name:"Magbuhat Assignment",
      description:"12:00 AM sa gabie",
      status:"pending",
      owner:"Vanessa"
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

  deleteTodo(id){
    for(let i=0;i< this.todoData.length;i++){
      if(this.todoData[i].id === id){
        this.todoData.splice(i,1);
      }
    }
   
  }
  
}
