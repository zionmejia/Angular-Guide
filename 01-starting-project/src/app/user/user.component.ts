import {Component, Input, input, computed, Output, output, EventEmitter, OutputEmitterRef} from '@angular/core';
import {User} from "./user.model"
import {CardComponent} from "../shared/card/card.component";
// input (lower case) = special function

// type User = { id: number; name: string; avatar: string;};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: Boolean;
  @Output() select: EventEmitter<string> = new EventEmitter();

  public get imagePath(): string {
    return './assets/users/' + this.user.avatar;
  }

  // Signals learned but not being used
  // public avatar:string = input.required<string>();
  // public name:string = input.required<string>();
  // public select:OutputEmitterRef<string>= output<string>(); @@@ output with signal
  //
  // public imagePath = computed (() :string => {
  //   return "assets/users/" + this.avatar();
  // });

  public onSelectUser() {
    this.select.emit(this.user.id);
  }
}
