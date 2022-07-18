import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableCompComponent } from './table-comp/table-comp.component';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { GeodesicsComponent } from './geodesics/geodesics.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataServiceService } from './data-service.service';
import { GeodesicsSurveyComponent } from './geodesics-survey/geodesics-survey.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    TestOneComponent,
    TestTwoComponent,
    TableCompComponent,
    GeodesicsComponent,
    NavbarComponent,
    FooterComponent,
    GeodesicsSurveyComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [TestTwoComponent,DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
