import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { TodosService } from "../todos.service";

@Component({
  selector: "app-todoslist",
  templateUrl: "./todoslist.component.html",
  styleUrls: ["./todoslist.component.scss"]
})
export class TodoslistComponent implements OnInit {
  constructor(private todosService: TodosService) {
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
}
