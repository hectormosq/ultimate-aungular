import {
  AfterContentInit,
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from "@angular/core";

import { User } from "./auth-form/auth-form.interface";
import { AuthFormComponent } from "./auth-form/auth-form.component";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent implements AfterContentInit {
  component: ComponentRef<AuthFormComponent>;

  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = "Create Account";
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  loginUser(user: User) {
    console.log("Login", user);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }
}
