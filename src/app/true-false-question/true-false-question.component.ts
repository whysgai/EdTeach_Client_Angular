import { Component, Input, OnInit } from '@angular/core';
// import {faCheck, faTimes} from '@font'

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {



  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  grading = false;
  // faCheck = faCheck; faTimes = faTimes;

  setAnswer = (choice) => { this.question.answer = choice; };
  grade = () => { this.grading = !this.grading; };


  ngOnInit(): void {
  }

}
