import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTaskData} from "../task/task.model";
import {TasksService} from "../tasks.service";

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
  @Input({ required: true }) userId!: string;
  @Output() toggle: EventEmitter<void> = new EventEmitter();
  public enteredTitle = "";
  public enteredSummary = "";
  public enteredDate = "";
  private tasksService = inject(TasksService);

  public closeAddTask() {
    this.toggle.emit();
  }

  public onSumbit() {
    this.tasksService.onAddTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    )
    this.toggle.emit();
  }


}
