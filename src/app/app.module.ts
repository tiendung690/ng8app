import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AdminModule} from './admin/admin.module';
import {CustomerModule} from './customer/customer.module'
import {FormsModule} from '@angular/forms';
import { SimpleDirective } from './simple.directive'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleDirective
  ],
  imports: [
    BrowserModule,
    AdminModule,
    CustomerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
