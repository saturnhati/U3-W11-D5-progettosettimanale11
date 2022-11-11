import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "./auth.service";

@Component({
  template: `
    <div class="container my-4">
      <form #f="ngForm" (ngSubmit)="onSubmit()">
        <mat-form-field class="mb-3">
          <input matInput name="firstname" ngModel type="text" placeholder="First Name" />
        </mat-form-field>
        <mat-form-field class="mb-3">
          <input matInput name="lastname" ngModel type="text" placeholder="Last Name" />
        </mat-form-field>
        <mat-form-field class="mb-3">
          <input matInput name="email" ngModel type="email" placeholder="Email" />
        </mat-form-field>
        <mat-form-field class="mb-3">
          <input matInput name="password" ngModel type="password" placeholder="Password" />
        </mat-form-field>
        <button class="my-1" mat-flat-button color="primary">Register</button>
      </form>
    </div>
  `,
  styles: [
    `
      mat-form-field {
        max-width: 500px;
        display: block;
      }
    `,
  ],
})
export class RegisterPage implements OnInit {
  @ViewChild("f") form!: NgForm;
  error = undefined;
  completed = undefined;
  durationInSeconds = 3;

  constructor(private authService: AuthService, private route: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.signUp(this.form.value).subscribe(
      (data) => {
        console.log(data), (this.error = undefined), this.route.navigate(["/login"]), this.openSnackBar();
      },
      (err) => {
        console.log(err), (this.error = err.error), this.openSnackBar2();
      }
    );
  }

  openSnackBar() {
    this._snackBar.openFromComponent(RegisteredComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openSnackBar2() {
    this._snackBar.openFromComponent(ErrorComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: "snack-bar-component",
  template: ` <span class="registered-snack"> Registered! </span> `,
  styles: [
    `
      .registered-snack {
        color: lavender;
      }
    `,
  ],
})
export class RegisteredComponent {}

@Component({
  selector: "snack-bar-component2",
  template: ` <span class="registered-snack"> Error! </span> `,
  styles: [
    `
      .registered-snack {
        color: lavender;
      }
    `,
  ],
})
export class ErrorComponent {}
