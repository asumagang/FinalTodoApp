import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.component.html',
  styleUrls: ['./todoslist.component.scss']
})
export class TodoslistComponent implements OnInit {

  constructor() { }
  // private router:Router, private activatedRoute:ActivatedRoute
  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
    //   console.log("User Id!");
    //   const userId= paramMap.get('userId');

    //   this.filteredData = this.todoData.filter((todo)=>{
    //     return todo.owner === userId;
    //   })
    // })
  }
  todoData = [
    {
      id:"1",
      name:"Kaon",
      description:"munganga",
      status:"pending",
      owner:"1"
    },
    {
      id:"2",
      name:"Tulog",
      description:"munganga",
      status:"done",
      owner:"2"
    },
    {
      id:"3",
      name:"Libang",
      description:"munganga",
      status:"pending",
      owner:"3"
    },
    {
      id:"4",
      name:"Magbuhat Assignment",
      description:"12:00 AM sa gabie",
      status:"pending",
      owner:"1"
    }
  ]
  searchText:string;

  filteredData:any[];

}
