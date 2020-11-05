import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
// import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
