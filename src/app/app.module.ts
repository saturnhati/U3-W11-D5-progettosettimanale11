import { AppRoutingModule } from "./app-routing.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar.component";
import { HomePage } from "./pages/home.page";

import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { PostsModule } from "./posts/posts.module";
import { UserModule } from "./user/user.module";

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomePage],
  imports: [BrowserModule, AppRoutingModule, SharedModule, AuthModule, PostsModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
