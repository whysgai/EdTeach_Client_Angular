import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/CourseService';
import { ModuleServices } from '../../services/ModuleServices';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-table-component',
  templateUrl: './course-table-component.component.html',
  styleUrls: ['./course-table-component.component.css']
})
export class CourseTableComponentComponent implements OnInit {

  courses = [];
  courseId = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.courseId = params.cid;
    });

    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
