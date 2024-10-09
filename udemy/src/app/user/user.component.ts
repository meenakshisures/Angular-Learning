import { Component,Input,Output,EventEmitter} from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // selectedUser=signal(DUMMY_USERS[randomIndex]);
  // imagePath=computed(()=> 'assets/users/users/'+this.selectedUser.avatar)
 // get imagePath(){
    //return 'assets/users/users/'+this.selectedUser.avatar
//  }
  @Input() user!:User;
  @Input() selected!:boolean;
  @Output() select=new EventEmitter();

  onSelectUser(){
    
    this.select.emit(this.user.id);
    
  }
 
}
