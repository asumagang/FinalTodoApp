import { Component, OnInit } from "@angular/core";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-updateuser-modal",
  templateUrl: "./updateuser-modal.component.html",
  styleUrls: ["./updateuser-modal.component.scss"],
  providers: [NgbModalConfig, NgbModal]
})
export class UpdateuserModalComponent implements OnInit {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = "static";
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }
  ngOnInit() {}
}
