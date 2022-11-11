import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  template: `
    <div class="container my-4">
      <form #f="ngForm" (ngSubmit)="onSubmit()">
        <mat-form-field class="mb-3">
          <input matInput name="email" ngModel type="email" placeholder="Email" />
        </mat-form-field>
        <mat-form-field class="mb-3">
          <input matInput name="password" ngModel type="password" placeholder="Password" />
        </mat-form-field>
        <button class="my-1" mat-flat-button color="primary">Login</button>
      </form>
    </div>
  `,
  styles: [
    `
      mat-form-field {
        max-width: 300px;
        display: block;
      }
    `,
  ],
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
