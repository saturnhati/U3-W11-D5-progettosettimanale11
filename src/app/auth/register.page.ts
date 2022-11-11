import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  template: `
    <div class="container my-4">
      <form #f="ngForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <input name="firstname" ngModel type="text" class="form-control" placeholder="First Name" />
        </div>
        <div class="mb-3">
          <input name="lastname" ngModel type="text" class="form-control" placeholder="Last Name" />
        </div>
        <div class="mb-3">
          <input name="email" ngModel type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="mb-3">
          <input name="password" ngModel type="password" class="form-control" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  `,
  styles: [],
})
export class RegisterPage implements OnInit {
  @ViewChild("f") form!: NgForm;
  error = undefined;
  completed = undefined;

  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.signUp(this.form.value).subscribe(
      (data) => {
        console.log(data), (this.error = undefined), this.route.navigate(["/login"]);
      },
      (err) => {
        console.log(err), (this.error = err.error);
      }
    );
  }
}
