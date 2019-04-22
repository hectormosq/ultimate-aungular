import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChildren,
  QueryList
} from "@angular/core";
import { User } from "./auth-form.interface";
import { AuthRememberComponent } from "./auth-remember.component";
@Component({
  selector: "auth-form",
  templateUrl: "auth-form.template.html"
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  ngAfterContentInit() {
    console.log("remember: ", this.remember);
    this.remember.forEach((item) => item.checked.subscribe(
      (checked: boolean) => (this.showMessage = checked)
    ))
  }

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
