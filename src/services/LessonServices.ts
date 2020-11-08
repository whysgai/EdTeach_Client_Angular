import {Injectable} from '@angular/core';

const genericApi = 'https://wbdv-generic-server.herokuapp.com/api/cohenw';

@Injectable()
export class LessonServices {

  createLessonForModule = (moduleId, lesson) =>
    fetch(`${genericApi}/modules/${moduleId}/lessons`, {
      method: 'POST',
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  findLessonsByModule = (moduleId) =>
    fetch(`${genericApi}/modules/${moduleId}/lessons`)
      .then(response => response.json())


  updateLesson = (lesson) =>
    fetch(`${genericApi}/lessons/${lesson._id}`, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  deleteLesson = (lesson) =>
    fetch(`${genericApi}/lessons/${lesson._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

}
