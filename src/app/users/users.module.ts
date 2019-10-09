import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserslistComponent } from './userslist/userslist.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { UpdateuserModalComponent } from './updateuser-modal/updateuser-modal.component';
import { DeleteuserModalComponent } from './deleteuser-modal/deleteuser-modal.component';



@NgModule({
  declarations: [UserslistComponent,  UpdateuserModalComponent, DeleteuserModalComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  entryComponents:[
    DeleteuserModalComponent,
    UpdateuserModalComponent
  ]
})
export class UsersModule { }
