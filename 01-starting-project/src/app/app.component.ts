import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {TasksComponent} from "./tasks/tasks.component";
import {DUMMY_USERS} from "./dummy-users";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  public users: { id: string; name: string; avatar: string }[] = DUMMY_USERS;
  public selectedUser: { id: string; name: string; avatar: string } | null = null;

  public onSelectUser(id: string) {
    const user = this.users.find(u => u.id === id) || null;
    this.selectedUser = user;
    return this.selectedUser;
  }
}
