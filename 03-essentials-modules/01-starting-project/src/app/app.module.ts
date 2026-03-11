import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {TasksComponent} from "./tasks/tasks.component";
import {CardComponent} from "./shared/card/card.component";
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TaskComponent} from "./tasks/task/task.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent, TasksComponent, CardComponent, TaskComponent],
  bootstrap: [AppComponent, HeaderComponent, UserComponent, TasksComponent, CardComponent],
  imports: [BrowserModule,DatePipe,FormsModule]
})
export class AppModule {

}
