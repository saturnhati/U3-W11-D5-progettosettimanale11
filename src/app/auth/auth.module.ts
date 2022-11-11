import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterPage } from "./register.page";
import { LoginPage } from "./login.page";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Route, RouterModule } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";

const Component = [LoginPage, RegisterPage];

const routes: Route[] = [
  {
    path: "register",
    component: RegisterPage,
  },
  {
    path: "login",
    component: LoginPage,
  },
];

@NgModule({
  declarations: [...Component],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule.forChild(routes), MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  exports: [...Component],
})
export class AuthModule {}
