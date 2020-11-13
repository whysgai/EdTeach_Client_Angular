import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServices} from '../../services/LessonServices';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {

  lessons = [];
  layout = '';
  courseId = '';
  moduleId = '';
  lessonId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private lessonService: LessonServices
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.lessonId = params.lid;
      if (typeof this.moduleId !== 'undefined') {
        this.lessonService.findLessonsByModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }


}
