import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ViewChild
} from "@angular/core";
import { User } from "./auth-form.interface";
import { AuthRememberComponent } from "./auth-remember.component";
import { AuthMessageComponent } from "./auth-message.component";
@Component({
  selector: "auth-form",
  templateUrl: "auth-form.template.html"
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean;

  @ContentChildren(AuthRememberComponent) remember: QueryList<
    AuthRememberComponent
  >;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  ngAfterContentInit() {
    if (this.message) {
      this.message.days = 30;
    }
    this.remember.forEach(item =>
      item.checked.subscribe((checked: boolean) => (this.showMessage = checked))
    );
  }

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
