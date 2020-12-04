import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-multi-choice-question',
  templateUrl: './multi-choice-question.component.html',
  styleUrls: ['./multi-choice-question.component.css']
})
export class MultiChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' };

  @Input()
  graded: boolean;

  setAnswer = (choice) => { this.question.answer = choice; };

  ngOnInit(): void {
    console.log(this.question);
  }


}
