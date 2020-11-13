import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponentComponent} from './course-table-component/course-table-component.component';
import {CourseViewerComponentComponent} from './course-viewer-component/course-viewer-component.component';
import {CourseListComponent} from './course-list/course-list.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'testlist', component: CourseListComponent},
  {path: 'table/courses', component: CourseTableComponentComponent},
  {path: ':layout/courses/:cid/modules', component: CourseViewerComponentComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseViewerComponentComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponentComponent}
];

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
