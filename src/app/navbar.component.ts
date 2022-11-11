import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  template: `
    <mat-toolbar class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand me-5" href="#"><mat-icon> local_florist</mat-icon></a>
          <ul class="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" [routerLink]="['/']" routerLinkActive="active">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/active-posts']" routerLinkActive="active">Active Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/inactive-posts']" routerLinkActive="active">Inactive Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/users']" routerLinkActive="active">Users</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/register']" routerLinkActive="active">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/login']" routerLinkActive="active">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      a {
        display: flex;
        align-items: center;
      }
      mat-icon {
        font-size: 1.2rem;
      }
      ul {
        display: flex;
        align-items: center;
      }
      li {
        font-size: 1rem;
        margin-right: 0.6rem;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
