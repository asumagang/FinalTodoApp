import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { TodosService } from "../todos.service";
import { DeletetodoModalComponent } from '../deletetodo-modal/deletetodo-modal.component';
import { NgbModalConfig, NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-todoslist",
  templateUrl: "./todoslist.component.html",
  styleUrls: ["./todoslist.component.scss"]
})
export class TodoslistComponent implements OnInit {
  constructor(private todosService: TodosService,  private modal: NgbModal) {
    this.filteredData = this.todosService.getTodos();
  }

  ngOnInit() {
    this.todoData = this.todosService.getTodos();
  }
  todoData = [];
  searchText: string;

  filteredData: any[];

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.todoData.filter(todo => {
        return (
          todo.name.toLowerCase().includes(searchText) ||
          todo.description.toLowerCase().includes(searchText) ||
          todo.status.toLowerCase().includes(searchText)
        );
      });
    } else {
      this.filteredData = this.todoData;
    }
  }

  opendeletetodomodal(todo){
    const modalref= this.modal.open(DeletetodoModalComponent);
    modalref.componentInstance.todo =todo;
    modalref.result.then((result)=>{
      if(result){
        this.todosService.deleteTodo(todo.id);
      }
    })

  }
}
