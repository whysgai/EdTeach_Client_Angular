import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { QuestionService } from '../../services/QuestionService';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions = [
    // {
    //   _id: '123', title: 'JPA True False', quizId: '234', question:
    //     'JPA stands for Java Persistence API', correct: 'true', type: 'TRUE_FALSE'
    // },
    // {
    //   _id: '234', title: 'JPA Multiple Choice', quizId: '234', question:
    //     'What does JPA stand for?', correct: 'Java Persistence API',
    //   type: 'MULTIPLE_CHOICE', choices:
    //     ['Java Pseudo API', 'Java Persistence API', 'JSON Persistence API',
    //       'JavaScript Persistence API']
    // },
    // {
    //   _id: '345', title: 'JSON True False', quizId: '234', question:
    //     'JSON stands for Java Object Notation', correct: 'false', type: 'TRUE_FALSE'
    // },
    // {
    //   _id: '456', title: 'JSON Multiple Choice', quizId: '345', question:
    //     'What does JSON stand for?', correct: 'JavaScript Object Notation',
    //   type: 'MULTIPLE_CHOICE', choices: ['JavaScript Object Notation',
    //     'JavaScript Object Normalization', 'Java Object Normalization', 'Java Object Notation']
    // },
    // {
    //   _id: '567', title: 'CSS True False', quizId: '345', question:
    //     'CSS stands for Cascading Style Sheet', correct: 'true', type: 'TRUE_FALSE'
    // },
    // {
    //   _id: '678', title: 'CSS Multiple Choice', quizId: '123', question:
    //     'What does CSS stand for?', correct: 'Cascading Style Sheet', type:
    //     'MULTIPLE_CHOICE', choices: ['Class Style Sheet', 'Cascading Screen Style',
    //     'Cascading Style Sheet', 'Cascading Style Screen']
    // }
  ];
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
