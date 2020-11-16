import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes = [
    {_id: '123', title: 'Quiz 1', courseId: '5fab512bd481ba0017d7513f'},
    {_id: '234', title: 'Quiz 2', courseId: '5fab5134d481ba0017d75141'},
    {_id: '345', title: 'Quiz 3', courseId: '5fab5134d481ba0017d75141'}
  ];
  layout = '';
  courseId = '';
  quizId = '';

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.cid;
      // this.service.findAllQuizzes()
      //   .then(quizzes => this.quizzes = quizzes);
    });

  }

}
