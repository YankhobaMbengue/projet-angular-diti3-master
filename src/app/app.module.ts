import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './employe/add/add.component';
import { EditComponent } from './employe/edit/edit.component';
import { ListComponent } from './employe/list/list.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  //Component
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent
  ],
  //Modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  //Services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
