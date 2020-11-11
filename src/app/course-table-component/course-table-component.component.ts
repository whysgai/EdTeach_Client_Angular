import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/CourseService';
import { ModuleServices } from '../../services/ModuleServices';

@Component({
  selector: 'app-course-table-component',
  templateUrl: './course-table-component.component.html',
  styleUrls: ['./course-table-component.component.css']
})
export class CourseTableComponentComponent implements OnInit {

  courses = [];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
