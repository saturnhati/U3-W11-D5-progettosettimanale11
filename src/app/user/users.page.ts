import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { UsersService } from "./users.service";

@Component({
  template: `
    <div class="container mt-4">
      <mat-nav-list class="list-group">
        <mat-list-item [routerLink]="[user.id]" routerLinkActive="active" *ngFor="let user of users">{{ user.firstname }} {{ user.lastname }}</mat-list-item>
      </mat-nav-list>
      <hr />
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class UsersPage implements OnInit {
  users!: User[];
  constructor(private usersSrv: UsersService, private http: HttpClient) {}

  ngOnInit(): void {
    //this.users = this.usersSrv.getUsers();
    this.usersSrv.getUsers().subscribe((data) => (this.users = data));
  }
}
