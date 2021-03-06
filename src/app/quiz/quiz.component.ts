import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuestionService } from '../../services/QuestionService';
import { QuizService } from '../../services/QuizService';

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
  quiz = {
    _id: '',
    title: ''
  };

  constructor(
    private quizService: QuizService,
    private questionService: QuestionService,
    private activeRoute: ActivatedRoute
  ) { }

  @Input()
  graded: boolean;

  submit = () => {
    console.log('Changing graded to true');
    console.log(this.questions);
    this.graded = true;
    this.quizService.createAttempt(this.quizId, this.questions);

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.cid;
      this.quizId = params.qid;
      this.questionService.findAllQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
      this.quizService.findQuizById(this.quizId)
        .then(quiz => this.quiz = quiz);
    });
  }
}
