import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
