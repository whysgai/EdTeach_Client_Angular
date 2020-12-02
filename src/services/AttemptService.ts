import {Injectable} from '@angular/core';

const localApi = 'http://localhost:4201';

@Injectable()
export class AttemptService {

  findAttemptsForQuiz = (qid) =>
    fetch(`${localApi}/quizzes/${qid}/attempts`)
      .then(response => response.json())


}
