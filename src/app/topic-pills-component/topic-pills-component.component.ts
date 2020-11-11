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
  topicId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private topicService: TopicServices
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const lessonId = params.lid;
      this.topicId = params.tid;
      if (typeof lessonId !== 'undefined') {
        this.topicService.findTopicsByLesson(lessonId)
          .then(topics => this.topics = topics);
      }
    });
  }

}
