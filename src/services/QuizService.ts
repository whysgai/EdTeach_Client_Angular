import {Injectable} from '@angular/core';

const localApi = '';

@Injectable()
export class QuizService {
  findAllQuizzes = () =>
    fetch(`${localApi}/quizzes`)
      .then(response => response.json())

}
