import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import {Users} from '../users';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adduser-modal',
  templateUrl: './adduser-modal.component.html',
  styleUrls: ['./adduser-modal.component.scss'],
  providers: [NgbModalConfig, NgbModal,FormsModule
  ]
})
export class AdduserModalComponent implements OnInit {



  constructor(private config: NgbModalConfig, private modalService: NgbModal,private usersService: UsersService,
    private router:Router) { 

    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }
  

  ngOnInit() {
  }
  addUser(user:Users){
      console.log(user);
      this.usersService.addUsers(user);
     console.log(this.usersService.getUsers()) ;
      this.modalService.dismissAll();
  }

 
}
