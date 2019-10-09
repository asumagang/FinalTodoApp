import { Component, OnInit, Input } from "@angular/core";
import {
  NgbModalConfig,
  NgbModal,
  NgbActiveModal
} from "@ng-bootstrap/ng-bootstrap";
import { Users } from "../users";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-deleteuser-modal",
  templateUrl: "./deleteuser-modal.component.html",
  styleUrls: ["./deleteuser-modal.component.scss"],
  providers: [NgbModalConfig, NgbModal, FormsModule]
})
export class DeleteuserModalComponent implements OnInit {
  constructor(config: NgbModalConfig, private modalService: NgbActiveModal) {
    config.backdrop = "static";
    config.keyboard = false;
  }
  @Input()
  user: Users;

  ngOnInit() {}

  deleteUser(user) {
    this.modalService.close(user);
    console.log(user);
  }
}
