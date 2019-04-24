import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MyForDirective } from "./my-for/my-for.directive";

@NgModule({
  declarations: [AppComponent, MyForDirective],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
