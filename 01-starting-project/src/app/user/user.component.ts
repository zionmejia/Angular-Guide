import {Component, Input, input, computed, Output, output, EventEmitter, OutputEmitterRef} from '@angular/core';
// input (lower case) = special function
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select:EventEmitter<string> = new EventEmitter();
  public get imagePath(): string {
    return './assets/users/' + this.avatar;
  }

  // Signals learned but not being used
  // public avatar:string = input.required<string>();
  // public name:string = input.required<string>();
  // public select:OutputEmitterRef<string>= output<string>(); @@@ output with signal
  //
  // public imagePath = computed (() :string => {
  //   return "assets/users/" + this.avatar();
  // });

  public onSelectUser () {
    this.select.emit(this.id);
  }
}
