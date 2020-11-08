import {Injectable} from '@angular/core';

const genericApi = 'https://wbdv-generic-server.herokuapp.com/api/cohenw';

@Injectable()
export class TopicServices {

  createTopicForLesson = (lessonId, topic) =>
    fetch(`${genericApi}/lessons/${lessonId}/topics`, {
      method: 'POST',
      body: JSON.stringify(topic),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  findTopicsByLesson = (lessonId) =>
    fetch(`${genericApi}/lessons/${lessonId}/topics`)
      .then(response => response.json())


  updateTopic = (topic) =>
    fetch(`${genericApi}/topics/${topic._id}`, {
      method: 'PUT',
      body: JSON.stringify(topic),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  deleteTopic = (topic) =>
    fetch(`${genericApi}/topics/${topic._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

}
