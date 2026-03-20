import {Routes} from "@angular/router";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {resolveUserName, UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {resolveUserTasks, TasksComponent} from "./tasks/tasks.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path : '',
    redirectTo : '/users/u1',
    pathMatch : 'full',
    title: 'no tasks selected'
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    data: {
      message : 'Yo',
    },
    resolve : {
      userName : resolveUserName,
    },
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        component: TasksComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
      },
    ],


  },
  {
    path: '**',
    component: NotFoundComponent,
  },

]
