import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-addTask',
  standalone: true,
  templateUrl: './addTask.component.html',
  styleUrl: './addTask.component.css',
})

export class AddTaskComponent {
  @Output() toggle: EventEmitter<string> = new EventEmitter();

  public closeAddTask() {
    this.toggle.emit();
  }


}
