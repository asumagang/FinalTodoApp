import { Component, OnInit, Input } from "@angular/core";
import {
  NgbModalConfig,
  NgbModal,
  NgbActiveModal
} from "@ng-bootstrap/ng-bootstrap";
import { Users } from "../users";
import { UsersService } from "../users.service";

@Component({
  selector: "app-updateuser-modal",
  templateUrl: "./updateuser-modal.component.html",
  styleUrls: ["./updateuser-modal.component.scss"],
  providers: [NgbModalConfig, NgbModal]
})
export class UpdateuserModalComponent implements OnInit {
  constructor(
    config: NgbModalConfig,
    private modalService: NgbActiveModal,
    private usersService: UsersService
  ) {
    config.backdrop = "static";
    config.keyboard = false;
  }

  @Input()
  user: Users;

  firstName: string;
  lastName: string;
  occupation: string;
  id: number;

  ngOnInit() {
    if (this.user) {
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.occupation = this.user.occupation;
    }
  }

  close() {
    this.modalService.close();
  }
  updateUser(user) {
    const newuser: Users = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      occupation: this.occupation,
      // profilePicture: this.user.profilePicture
    };
    if(user.id!=="undefined"){
      this.usersService.updateUser(newuser);
    }
    else{
      this.usersService.addUsers(newuser);
    }
    
    console.log(this.usersService.getUsers());
    this.close();

  }
}
