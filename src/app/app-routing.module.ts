import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponentComponent} from './course-table-component/course-table-component.component';
import {CourseViewerComponentComponent} from './course-viewer-component/course-viewer-component.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'table/courses', component: CourseTableComponentComponent},
  {path: ':layout/courses/:cid/modules', component: CourseViewerComponentComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseViewerComponentComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponentComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics/:tid/widgets', component: CourseViewerComponentComponent},
  {path: 'quizzes', component: QuizzesComponent},
  {path: 'quizzes/:qid/quiz', component: QuizComponent}
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
