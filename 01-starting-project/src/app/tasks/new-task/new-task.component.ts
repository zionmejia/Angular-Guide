import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})

export class NewTaskComponent {
  @Output() toggle: EventEmitter<void> = new EventEmitter();

  public closeAddTask() {
    this.toggle.emit();
  }


}
