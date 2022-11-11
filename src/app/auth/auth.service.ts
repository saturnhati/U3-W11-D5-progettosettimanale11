import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLogged = false;

  constructor(private http: HttpClient) {
    this.restore();
  }

  restore() {
    const userLogin = localStorage.getItem("userLogin");
    if (userLogin) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  signUp(obj: User) {
    return this.http.post("http://localhost:3000/register", obj);
  }

  signIn(obj: User) {
    return this.http.post("http://localhost:3000/login", obj).pipe(
      tap((data) => {
        console.log(data);
        this.isLogged = true;
      })
    );
  }

  getIsLogged() {
    return this.isLogged;
  }
}
