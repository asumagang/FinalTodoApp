import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adduser-modal',
  templateUrl: './adduser-modal.component.html',
  styleUrls: ['./adduser-modal.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AdduserModalComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

}
