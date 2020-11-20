import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuestionService } from '../../services/QuestionService';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions = [];
  layout = '';
  courseId = '';
  quizId = '';

  constructor(
    private questionService: QuestionService,
    private activeRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.cid;
      this.quizId = params.qid;
      console.log('Current quiz is: ' + this.quizId);
      this.questionService.findAllQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    });
  }
}
