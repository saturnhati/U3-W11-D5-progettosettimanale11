import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthModule } from "./auth/auth.module";
import { HomePage } from "./pages/home.page";
import { PostsModule } from "./posts/posts.module";
import { UserModule } from "./user/user.module";

const routes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "homepage",
  },
  {
    path: "homepage",
    component: HomePage,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PostsModule, UserModule, AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
