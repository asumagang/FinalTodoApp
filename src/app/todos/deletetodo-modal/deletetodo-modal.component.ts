import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Todos } from '../todos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deletetodo-modal',
  templateUrl: './deletetodo-modal.component.html',
  styleUrls: ['./deletetodo-modal.component.scss'],
  providers:[NgbModalConfig, NgbModal,FormsModule]
})
export class DeletetodoModalComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbActiveModal) { 
    config.backdrop = "static";
    config.keyboard = false;
  }
  @Input()
  todo:Todos


  ngOnInit() {
  }
  deleteTodo(todo){
    this.modalService.close(todo);
    console.log(todo);
    
  }

}
