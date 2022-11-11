import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivePostsPage } from "./active-posts.page";
import { InactivePostsPage } from "./inactive-posts.page";
import { PostDetailsPage } from "./post-details.page";
import { FormsModule } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { PostCardComponent } from "./post-card.component";
import { SharedModule } from "../shared/shared.module";

const routes: Route[] = [
  {
    path: "active-posts",
    component: ActivePostsPage,
  },
  {
    path: "inactive-posts",
    component: InactivePostsPage,
  },
  {
    path: "active-posts/:id",
    component: PostDetailsPage,
  },
  {
    path: "inactive-posts/:id",
    component: PostDetailsPage,
  },
];

const Component = [ActivePostsPage, InactivePostsPage, PostDetailsPage, PostCardComponent];

@NgModule({
  declarations: [...Component],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), SharedModule],
  exports: [...Component],
})
export class PostsModule {}
