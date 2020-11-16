import {Injectable} from '@angular/core';

const localApi = '';

@Injectable()
export class QuizService {
  findQuizzesForCourse = () =>
    fetch(`${localApi}/quizzes`)
      .then(response => response.json())

}
