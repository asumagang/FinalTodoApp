import { Component, OnInit } from "@angular/core";

import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { TodosService } from "../todos.service";
import { Todos } from '../todos';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: "app-addtodo-modal",
  templateUrl: "./addtodo-modal.component.html",
  styleUrls: ["./addtodo-modal.component.scss"]
})
export class AddtodoModalComponent implements OnInit {
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private todosService: TodosService,
    private router: Router,
    private usersService: UsersService
  ) {
    config.backdrop = "static";
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }
  userData:any;
  ngOnInit() {
    this.userData = this.usersService.getUsers();
  }
  addTodo(todo:Todos){
    console.log(todo);
    this.todosService.addUsers(todo);
    console.log(this.todosService.getTodos()) ;
    this.modalService.dismissAll();
}
}
