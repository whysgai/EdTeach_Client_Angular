import {Injectable} from '@angular/core';

const genericApi = 'https://wbdv-generic-server.herokuapp.com/api/cohenw';

@Injectable()
export class ModuleServices {

  createModuleForCourse = (courseId, module) =>
    fetch(`${genericApi}/courses/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  findModulesByCourse = (courseId) =>
    fetch(`${genericApi}/courses/${courseId}/modules`)
      .then(response => response.json())


  updateModule = (module) =>
    fetch(`${genericApi}/modules`, {
      method: 'PUT',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  deleteModule = (module) =>
    fetch(`${genericApi}/modules/${module._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

}
