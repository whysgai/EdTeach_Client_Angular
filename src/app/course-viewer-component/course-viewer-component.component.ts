import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-viewer-component',
  templateUrl: './course-viewer-component.component.html',
  styleUrls: ['./course-viewer-component.component.css']
})
export class CourseViewerComponentComponent implements OnInit {

  layout = '';

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.layout = params.layout;
    });
  }

}
