import {Injectable} from '@angular/core';

const genericApi = 'https://wbdv-generic-server.herokuapp.com/api/cohenw';

@Injectable()
export class CourseService {

  createCourse = () =>
    fetch(`${genericApi}/courses`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Course'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  findAllCourses = () =>
    fetch(`${genericApi}/courses`)
      .then(response => response.json())


  updateCourse = (course) =>
    fetch(`${genericApi}/courses/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  deleteCourse = (course) =>
    fetch(`${genericApi}/courses/${course._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())




}
