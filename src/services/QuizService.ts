import {Injectable} from '@angular/core';

const localApi = 'http://localhost:4201';

@Injectable()
export class QuizService {
  findAllQuizzes = () =>
    fetch(`${localApi}/quizzes`)
      .then(response => response.json())

  findQuizById = (quizId) =>
    fetch(`${localApi}/quizzes/${quizId}`)
      .then(response => response.json())

  createAttempt = (quizId, questions) =>
    fetch(`${localApi}/quizzes/${quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }
    })
}
