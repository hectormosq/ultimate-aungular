import { Component } from "@angular/core";

import { User } from "./auth-form/auth-form.interface";

@Component({
  selector: "projecting-modules",
  templateUrl: "projecting-modules.component.html"
})
export class ProjectingModulesComponent {
  rememberMe: boolean = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
  createUser(user: User) {
    console.log("Create account", user);
  }

  loginUser(user: User) {
    console.log("Login", user);
  }
}
