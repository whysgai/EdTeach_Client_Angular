import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  title = 'Course List Component';
  courses = [
    {_id: '123', title: 'Course A'},
    {_id: '345', title: 'Course B'},
    {_id: '567', title: 'Course C'}
  ];
  modules = [];
  lessons = [];
  topics = [];

  newCourseTitle = '';

  createCourse = (title) =>
    this.courses.push({_id: new Date().getMilliseconds().toString(), title})

  deleteCourse = (courseToDelete) =>
    this.courses = this.courses.filter(course => course !== courseToDelete)

  // findModulesByCourseId = (courseId) => {}

  // findLessonsByModuleId = (moduleId) =>

  // findTopicsByLessonId = (lessonId) =>

  // findWidgetsByTopicId = (topicId) =>

  constructor() { }

  ngOnInit(): void {
    fetch('http://wbdv-generic-server.herokuapp.com/api/cohenw/courses')
      .then(response => response.json())
      .then(courses => this.courses = courses);
  }


}
