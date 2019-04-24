import {
  AfterContentInit,
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  TemplateRef
} from "@angular/core";

import { User } from "./auth-form/auth-form.interface";
import { AuthFormComponent } from "./auth-form/auth-form.component";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent implements AfterContentInit {
  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  @ViewChild('tmpl') tmpl: TemplateRef<any>;
  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl);
  }


}
