import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {

  createCourse = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/cohenw/courses`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Course'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  findAllCourses = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/cohenw/courses`)
      .then(response => response.json())


  updateCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/cohenw/courses/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  deleteCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/cohenw/courses/${course._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())




}
