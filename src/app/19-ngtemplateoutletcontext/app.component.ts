import {
  Component,
} from "@angular/core";

import { AuthFormComponent } from "./auth-form/auth-form.component";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  ctx = {
    $implicit: "Hector Mosquera",
    location: "Caracas, VE"
  }
}
