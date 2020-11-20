import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuizService } from '../../services/QuizService';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes = [];
  layout = '';
  courseId = '';
  quizId = '';

  constructor(
    private quizService: QuizService,
    private activeRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.cid;
      this.quizService.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
    });

  }

}
