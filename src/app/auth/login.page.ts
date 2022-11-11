import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  template: `
    <div class="container my-4">
      <form #f="ngForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <input name="email" ngModel type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="mb-3">
          <input name="password" ngModel type="password" class="form-control" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  `,
  styles: [],
})
export class LoginPage implements OnInit {
  @ViewChild("f") form!: NgForm;
  error = undefined;

  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.signIn(this.form.value).subscribe(
      (data) => {
        console.log(data), (this.error = undefined), localStorage.setItem("userLogin", JSON.stringify(data));
      },
      (err) => {
        console.log(err), (this.error = err.error);
      }
    );
  }
}
