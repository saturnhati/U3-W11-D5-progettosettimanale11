import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../models/post";

@Component({
  selector: "app-post-card",
  template: `
    <mat-card class="my-3 py-4 px-5">
      <mat-card-title>{{ post.id }} - {{ post.title | maiuscolo }}</mat-card-title>
      <mat-card-subtitle>Post</mat-card-subtitle>
      <mat-card-content>{{ post.body }}</mat-card-content>
      <mat-card-footer><ng-content></ng-content></mat-card-footer>
    </mat-card>
  `,
  styles: [
    `
      mat-card-title {
        line-height: 1.7rem;
      }
    `,
  ],
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;
  @Input() bgColor!: string;

  constructor() {}

  ngOnInit(): void {}
}
