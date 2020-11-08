import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
// import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {CourseService} from '../services/CourseService';
import {ModuleServices} from '../services/ModuleServices';
import {LessonServices} from '../services/LessonServices';
import {TopicServices} from '../services/TopicServices';

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
  providers: [
    CourseService,
    ModuleServices,
    LessonServices,
    TopicServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
