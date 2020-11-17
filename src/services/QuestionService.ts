import {Injectable} from '@angular/core';

const localApi = '';

@Injectable()
export class QuestionService {
  findAllQuestionsForQuiz = (quiz) =>
    fetch(`${localApi}/quizzes/${quiz._id}/questions`)
      .then(response => response.json())

}
