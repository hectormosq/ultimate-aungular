import {
  AfterContentInit,
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";

import { User } from "./auth-form/auth-form.interface";
import { AuthFormComponent } from "./auth-form/auth-form.component";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent implements AfterContentInit {
  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = "Create Account";
    component.instance.submitted.subscribe(this.loginUser);
  }

  loginUser(user: User) {
    console.log("Login", user);
  }
}
