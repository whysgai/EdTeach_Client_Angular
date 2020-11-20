import {Injectable} from '@angular/core';

const localApi = 'http://localhost:4201';

@Injectable()
export class QuestionService {
  findAllQuestionsForQuiz = (quizId) =>
    fetch(`${localApi}/quizzes/${quizId}/questions`)
      .then(response => response.json())

}
