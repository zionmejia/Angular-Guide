import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {type NewTaskData} from "./task/task.model";
import {CardComponent} from "../shared/card/card.component";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent,
    CardComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})

export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  public showTaskForm = false;


  constructor(private tasksService: TasksService) {

  }

  public get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  public toggleTaskForm() {
    this.showTaskForm = !this.showTaskForm;
  }


}
