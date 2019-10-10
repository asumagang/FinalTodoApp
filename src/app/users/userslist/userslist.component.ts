import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { DeleteuserModalComponent } from '../deleteuser-modal/deleteuser-modal.component';
import { NgbModalConfig, NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UpdateuserModalComponent } from '../updateuser-modal/updateuser-modal.component';
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  constructor(private usersService: UsersService, private modal: NgbModal) { 
    
    this.filteredData = this.usersService.getUsers();
  }

  ngOnInit() {
    this.loadata();
  }
  searchText:string;


  userData = [];

  filteredData: any[];
  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.userData.filter((user) => {
        return user.firstName.toLowerCase().includes(searchText) ||
          user.lastName.toLowerCase().includes(searchText) ||
          user.occupation.toLowerCase().includes(searchText);
      });
    }
    else {
      this.filteredData = this.userData;
    }
  }
  
  loadata(){
    this.userData = this.usersService.getUsers();
  }

  onUpdate(user) {
    console.log('Update');
    console.log(user);
  }

  onDelete(user) {
    console.log('Delete');
    console.log(user);
  }
  opendeletemodal(user){
    const modalref =this.modal.open(DeleteuserModalComponent);
    modalref.componentInstance.user =user;
    modalref.result.then((result)=>{
      if(result){
        this.usersService.deleteUser(user.id);
      }
    })

  }
  openmodal(user){
    if(user){
      const modalref =this.modal.open(UpdateuserModalComponent);
      modalref.componentInstance.user =user; 
      modalref.result.then((result)=>{
        if(result){
          this.filteredData = this.usersService.getUsers(); 
        }
      })
   
    }else{
      this.modal.open(UpdateuserModalComponent);
      console.log(user);

    }
   
  }

}
