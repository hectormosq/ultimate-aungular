import {
  Component,
  Output,
  ElementRef,
  EventEmitter,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  ChangeDetectorRef
} from "@angular/core";
import { User } from "./auth-form.interface";
import { AuthRememberComponent } from "./auth-remember.component";
import { AuthMessageComponent } from "./auth-message.component";
@Component({
  selector: "auth-form",
  templateUrl: "auth-form.template.html"
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  constructor(private changeDetector: ChangeDetectorRef) {}

  showMessage: boolean;

  @ContentChildren(AuthRememberComponent) remember: QueryList<
    AuthRememberComponent
  >;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ViewChild("email") email: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.email);
    if (this.message) {
      this.message.forEach(item => (item.days = 30));
      this.changeDetector.detectChanges();
    }
  }
  ngAfterContentInit() {
    this.remember.forEach(item =>
      item.checked.subscribe((checked: boolean) => (this.showMessage = checked))
    );
  }

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
