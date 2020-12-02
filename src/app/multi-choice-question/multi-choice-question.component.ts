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

  grading = false;

  @Input()
  graded: boolean;

  // @Input()
  // answer = '';
  // @Output()
  // answerChange = new EventEmitter<string>();
  //
  // submitAnswer = () =>
  //   this.answerChange.emit(this.answer)

  setAnswer = (choice) => { this.question.answer = choice; };
  grade = () => { this.grading = !this.grading; };

  // ngOnChanges(changes: SimpleChanges) {
  //   // changes.prop contains the old and the new value...
  // }


  ngOnInit(): void {
  }

}
