import {Component, Input, input, computed} from '@angular/core';
// input (lower case) = special function
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  public get imagePath(){
    return './assets/users/' + this.avatar;
  }

  // Signals learned but not being used
  // public avatar = input.required<string>();
  // public name = input.required<string>();
  //
  // public imagePath = computed (() => {
  //   return "assets/users/" + this.avatar();
  // });

  public onSelectUser () {

  }
}
