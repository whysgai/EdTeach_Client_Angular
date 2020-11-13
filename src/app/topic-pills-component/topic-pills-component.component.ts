import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServices} from '../../services/TopicServices';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {

  topics = [];
  layout = '';
  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private topicService: TopicServices
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.lessonId = params.lid;
      this.topicId = params.tid;
      if (typeof this.lessonId !== 'undefined') {
        this.topicService.findTopicsByLesson(this.lessonId)
          .then(topics => this.topics = topics);
      }
    });
  }

}
