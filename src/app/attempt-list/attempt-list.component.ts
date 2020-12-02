import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttemptService } from '../../services/AttemptService';
import { QuizService } from '../../services/QuizService';

@Component({
  selector: 'app-attempt-list',
  templateUrl: './attempt-list.component.html',
  styleUrls: ['./attempt-list.component.css']
})
export class AttemptListComponent implements OnInit {

  layout = '';
  courseId = '';
  quizId = '';
  attempts = [];
  quiz = {
    _id: '',
    title: ''
  }

  constructor(
    private attemptService: AttemptService,
    private quizService: QuizService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.cid;
      this.quizId = params.qid;
      this.quizService.findQuizById(this.quizId)
        .then(quiz => this.quiz = quiz);
      console.log('Component finding attempts for quiz:', this.quizId);
      this.attemptService.findAttemptsForQuiz(this.quizId)
        .then(attempts => this.attempts = attempts);
    });
  }

}
