import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ProjectingModulesComponent } from "./projecting-modules.component";
import { AuthFormModule } from "./auth-form/auth-form.module";

@NgModule({
  declarations: [ProjectingModulesComponent],
  imports: [BrowserModule, AuthFormModule],
  providers: [],
  bootstrap: [ProjectingModulesComponent]
})
export class ProjectingModulesModule {}
