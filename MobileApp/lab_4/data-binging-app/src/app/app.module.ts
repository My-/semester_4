import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PresidentListComponent } from './president-list/president-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PresidentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, PresidentListComponent]
})
export class AppModule { }
