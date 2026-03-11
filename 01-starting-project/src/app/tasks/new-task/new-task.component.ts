import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTaskData} from "../task/task.model";

@Component({
  selector: 'new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  imports: [
    FormsModule
  ]
})

export class NewTaskComponent {
  @Output() toggle: EventEmitter<void> = new EventEmitter();
  @Output() add: EventEmitter<NewTaskData> = new EventEmitter();
  public enteredTitle = "";
  public enteredSummary = "";
  public enteredDate = "";

  public closeAddTask() {
    this.toggle.emit();
  }

  public onSumbit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }


}
