import { Component } from "@angular/core";

import {} from "./auth-form/auth-form.interface";

@Component({
  selector: "intejection-slots",
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
