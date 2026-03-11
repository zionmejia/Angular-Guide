import { NgModule } from "@angular/core";

import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksComponent} from "./tasks.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [
    FormsModule
  ]
})

export class TasksModule {

}
