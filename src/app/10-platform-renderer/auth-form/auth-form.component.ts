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
  ChangeDetectorRef,
  Renderer
} from "@angular/core";
import { User } from "./auth-form.interface";
import { AuthRememberComponent } from "./auth-remember.component";
import { AuthMessageComponent } from "./auth-message.component";
@Component({
  selector: "auth-form",
  styles: [
    `
      .email {
        border-color: #9f72e6;
      }
    `
  ],
  templateUrl: "auth-form.template.html"
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  constructor(
    private renderer: Renderer,
    private changeDetector: ChangeDetectorRef
  ) {}

  showMessage: boolean;

  @ContentChildren(AuthRememberComponent) remember: QueryList<
    AuthRememberComponent
  >;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ViewChild("email") email: ElementRef;

  ngAfterViewInit(): void {
    this.renderer.setElementAttribute(
      this.email.nativeElement,
      "placeholder",
      "Enter your email"
    );
    this.renderer.setElementClass(this.email.nativeElement, "email", true);
    this.renderer.invokeElementMethod(this.email.nativeElement, "focus");
    /*
    this.email.nativeElement.setAttribute(
      "placeholder",
      "Enter your email address"
    );
    this.email.nativeElement.classList.add("email");
    this.email.nativeElement.focus();
      */
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
