import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post";
import { PostsService } from "./posts.service";

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts; let i = index">
        <app-post-card *ngIf="post.active" [post]="post">
          <button class="mx-2 my-1" (click)="onInactivePost(post.id, i)" mat-flat-button color="primary">Disattiva</button>
          <button class="mx-2 my-1" [routerLink]="['/active-posts', post.id]" routerLinkActive="router-link-active" mat-flat-button color="primary">Dettagli</button>
        </app-post-card>
      </div>
    </div>
  `,
  styles: [],
})
export class ActivePostsPage implements OnInit {
  posts!: Post[];
  constructor(private postsSrv: PostsService) {}

  async ngOnInit() {
    this.postsSrv.getPosts().subscribe((data) => (this.posts = data));
    console.log(this.posts);
  }

  onInactivePost(id: number, i: number) {
    this.postsSrv.updatePost({ active: false }, id).subscribe((data) => console.log(data));
    this.posts.splice(i, 1);
  }
}
