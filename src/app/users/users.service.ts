import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Users } from "./users";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  userData = [
    {
      id: 1,
      firstName: "Adrian",
      lastName: "Sumagang",
      occupation: "Software Engineer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: 2,
      firstName: "Jayson",
      lastName: "Custodio",
      occupation: "Software Engineer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: 3,
      firstName: "JR ",
      lastName: "Valles",
      occupation: "Father",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: 4,
      firstName: "Vanessa ",
      lastName: "Pasaan",
      occupation: "Dancer",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
      id: 5,
      firstName: "Richie",
      lastName: "Jimenez",
      occupation: "Tigkaon",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    }
  ];
  id: number;
  firstname: string;
  lastname: string;
  occupation: string;

  getUsers() {
    return this.userData;
  }
  addedusers: any;
  newusers: any;

  addUsers(user: Users) {
    console.log("aadddddddd")
    for (let i = 1; i <= this.userData.length + 1; i++) {
      this.id = i;
    }
    user.id = this.id;
    this.userData.push({
      id: this.id,
      firstName: user.firstName,
      lastName: user.lastName,
      occupation: user.occupation,
      profilePicture:null
    })
    console.log(user);
    
  }
  deleteUser(id) {
    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].id === id) {
        this.userData.splice(i, 1);
      }
    }
  }
  updateUser(user){
    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].id === user.id) {
        this.userData.splice(i, 1,user);
        console.log(this.userData[i])
      }
    }
  }
}
