import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from './modules/shared-material/shared-material.module';
import { ProductListListComponent } from './components/product-list-list/product-list-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedMaterialModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
