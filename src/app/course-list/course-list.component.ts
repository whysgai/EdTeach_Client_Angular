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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
