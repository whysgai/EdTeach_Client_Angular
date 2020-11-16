import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes = [
    {_id: '123', title: 'Quiz 1'},
    {_id: '234', title: 'Quiz 2'},
    {_id: '345', title: 'Quiz 3'}
  ];

  quizId = '';

  constructor(
    private activeRoute = ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
    });

  }

}
