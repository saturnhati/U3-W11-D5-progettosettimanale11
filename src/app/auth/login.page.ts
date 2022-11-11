import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
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
  durationInSeconds = 3;

  constructor(private authService: AuthService, private route: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.signIn(this.form.value).subscribe(
      (data) => {
        console.log(data), (this.error = undefined), localStorage.setItem("userLogin", JSON.stringify(data)), this.openSnackBar();
      },
      (err) => {
        console.log(err), (this.error = err.error);
      }
    );
  }

  openSnackBar() {
    this._snackBar.openFromComponent(LoggedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: "snack-bar-component",
  template: ` <span class="logged-in-snack"> Logged in! </span> `,
  styles: [
    `
      .logged-in-snack {
        color: lavender;
      }
    `,
  ],
})
export class LoggedComponent {}
