import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersPage } from "./users.page";
import { UsersDetailsPage } from "./users-details.page";
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { MatListModule } from "@angular/material/list";

const routes: Route[] = [
  {
    path: "users",
    component: UsersPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: ":id",
        component: UsersDetailsPage,
      },
    ],
  },
];

const Component = [UsersPage, UsersDetailsPage];

@NgModule({
  declarations: [...Component],
  imports: [CommonModule, RouterModule.forChild(routes), MatListModule],
  exports: [...Component],
})
export class UserModule {}
