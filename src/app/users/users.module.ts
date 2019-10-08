import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserslistComponent } from './userslist/userslist.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { AdduserModalComponent } from './adduser-modal/adduser-modal.component';
import { UpdateuserModalComponent } from './updateuser-modal/updateuser-modal.component';



@NgModule({
  declarations: [UserslistComponent, AdduserModalComponent, UpdateuserModalComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
