import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  template: `
    <h1 class="text-center my-5">Benvenuto sulla home page</h1>
    <div class=" mt-5 d-flex  justify-content-around">
      <button (click)="gotoActivePosts()" mat-flat-button color="primary">POST ATTIVI</button>
      <button (click)="gotoInactivePosts()" mat-flat-button color="primary">POST NON ATTIVI</button>
    </div>
  `,
  styles: [],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  gotoInactivePosts() {
    this.router.navigate(["/inactive-posts"]);
  }
  gotoActivePosts() {
    this.router.navigate(["/active-posts"]);
  }
}
