import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-choice-question',
  templateUrl: './multi-choice-question.component.html',
  styleUrls: ['./multi-choice-question.component.css']
})
export class MultiChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' };
  grading = false;

  setAnswer = (choice) => { this.question.answer = choice; };
  grade = () => { this.grading = !this.grading; };


  ngOnInit(): void {
  }

}
