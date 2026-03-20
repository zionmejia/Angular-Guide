import {Component, inject, input, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot
} from "@angular/router";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [
    RouterLink,
    RouterOutlet
  ]
})

export class UserTasksComponent {
  userName= input.required<string>();
  message = input.required<string>();
  // private activatedRoute = inject(ActivatedRoute);
  //
  // ngOnInit() {
  //   this.activatedRoute.data.subscribe({
  //     next: data => {
  //       console.log(data);
  //     }
  //   })
  // }

}

export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const usersService = inject(UsersService);
  return usersService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
}
