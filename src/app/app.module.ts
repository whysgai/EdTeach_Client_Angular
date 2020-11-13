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
import { CourseTableComponentComponent } from './course-table-component/course-table-component.component';
import { CourseViewerComponentComponent } from './course-viewer-component/course-viewer-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import { TopicPillsComponentComponent } from './topic-pills-component/topic-pills-component.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseTableComponentComponent,
    CourseViewerComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    TopicPillsComponentComponent,
    CourseNavigatorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
