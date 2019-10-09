import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserslistComponent } from './userslist/userslist.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { AdduserModalComponent } from './adduser-modal/adduser-modal.component';
import { UpdateuserModalComponent } from './updateuser-modal/updateuser-modal.component';
import { DeleteuserModalComponent } from './deleteuser-modal/deleteuser-modal.component';



@NgModule({
  declarations: [UserslistComponent, AdduserModalComponent, UpdateuserModalComponent, DeleteuserModalComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  entryComponents:[
    DeleteuserModalComponent
  ]
})
export class UsersModule { }
