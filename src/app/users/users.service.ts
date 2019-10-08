import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUsers(){
    return[
      {
        id: "1",
        firstName: "Adrian",
        lastName: "Sumagang",
        occupation: "Software Engineer",
        profilePicture:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      },
      {
        id: "2",
        firstName: "Jayson",
        lastName: "Custodio",
        occupation: "Software Engineer",
        profilePicture:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      },
      {
        id: "3",
        firstName: "JR ",
        lastName: "Valles",
        occupation: "Father",
        profilePicture:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      },
      {
        id: "4",
        firstName: "Vanessa ",
        lastName: "Pasaan",
        occupation: "Dancer",
        profilePicture:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      },
      {
        id: "5",
        firstName: "Richie",
        lastName: "Jimenez",
        occupation: "Tigkaon",
        profilePicture:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      }
    ]
   
  }
}
