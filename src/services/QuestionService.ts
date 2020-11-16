import {Injectable} from '@angular/core';

const localApi = '';

@Injectable()
export class QuestionService {
  findAllQuestionsForQuiz = () =>
    fetch(`${localApi}/questions`)
      .then(response => response.json())

}
