import { Component } from "@angular/core";

import { User } from "./auth-form/auth-form.interface";

@Component({
  selector: "injection-slots",
  templateUrl: "./injection-slots.template.html"
})
export class InjectionSlotsComponent {
  createUser(user: User) {
    console.log("Create account", user);
  }

  loginUser(user: User) {
    console.log("Login", user);
  }
}
