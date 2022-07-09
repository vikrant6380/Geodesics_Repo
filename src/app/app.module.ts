import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableCompComponent } from './table-comp/table-comp.component';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { GeodesicsComponent } from './geodesics/geodesics.component';


@NgModule({
  declarations: [
    AppComponent,
    TestOneComponent,
    TestTwoComponent,
    TableCompComponent,
    GeodesicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [TestTwoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
