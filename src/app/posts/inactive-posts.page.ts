import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post";
import { PostsService } from "./posts.service";

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts; let i = index">
        <app-post-card [post]="post" *ngIf="!post.active">
          <button class="mx-2 my-1" (click)="onActivePost(post.id, i)" mat-flat-button color="primary">Attiva</button>
          <button class="mx-2 my-1" [routerLink]="['/active-posts', post.id]" routerLinkActive="router-link-active" mat-flat-button color="primary">Dettagli</button>
        </app-post-card>
      </div>
    </div>
  `,
  styles: [],
})
export class InactivePostsPage implements OnInit {
  posts!: Post[];

  constructor(private postsSrv: PostsService) {}

  async ngOnInit() {
    this.postsSrv.getPosts().subscribe((data) => (this.posts = data));
  }

  onActivePost(id: number, i: number) {
    this.postsSrv.updatePost({ active: true }, id).subscribe((data) => console.log(data));
    this.posts.splice(i, 1);
  }
}
