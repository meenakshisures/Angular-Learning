import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS} from './dummy-users';
import { TasksComponent} from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users=DUMMY_USERS;
  selectedUserId?:string;
  

  get selectedUser(){
    return this.users.find((user) =>user.id===this.selectedUserId)!;
  }
  onSelectUser(id:string){
  this.selectedUserId=id;//This method takes a user id as an argument and sets selectedUserId to that value. It is used to change the selected user when an action (such as clicking on a user) happens.

  }
  title = 'udemy';
}
