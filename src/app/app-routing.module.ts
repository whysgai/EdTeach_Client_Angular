import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponentComponent} from './course-table-component/course-table-component.component';
import {CourseViewerComponentComponent} from './course-viewer-component/course-viewer-component.component';
import {CourseListComponent} from './course-list/course-list.component';
import {AppComponent} from './app.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component: CourseListComponent},
  {path: 'table/courses', component: CourseTableComponentComponent},
  {path: ':layout/courses/:cid/modules', component: CourseViewerComponentComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseViewerComponentComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponentComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics/:tid/widgets', component: CourseViewerComponentComponent},
  {path: ':layout/courses/:cid/quizzes', component: QuizzesComponent},
  {path: ':layout/courses/:cid/quizzes/:qid/quiz', component: QuizComponent}
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
