import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AuthFormModule } from "./auth-form/auth-form.module";

import { InjectionSlotsComponent } from "./injection-slots.component";

@NgModule({
  declarations: [InjectionSlotsComponent],
  imports: [BrowserModule, AuthFormModule],
  bootstrap: [InjectionSlotsComponent]
})
export class InejctionSlotsModule {}
