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

  newCourseTitle = '';

  createCourse = (title) =>
    this.courses.push({_id: new Date().getMilliseconds().toString(), title})

  deleteCourse = (courseToDelete) =>
    this.courses = this.courses.filter(course => course !== courseToDelete)

  constructor() { }

  ngOnInit(): void {
    fetch('http://wbdv-generic-server.herokuapp.com/api/jannunzi/courses')
      .then(response => response.json())
      .then(courses => this.courses = courses);
  }


}
