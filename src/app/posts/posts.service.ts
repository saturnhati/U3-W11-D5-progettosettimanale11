import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Post } from "../models/post";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(environment.urlAPI + "posts");
  }

  getPost(id: number) {
    return this.http.get<Post>(environment.urlAPI + "posts/" + id);
  }

  updatePost(data: Partial<Post>, id: number) {
    console.log(data, id);
    return this.http.patch<Post>(environment.urlAPI + "posts/" + id, data);
  }
}
