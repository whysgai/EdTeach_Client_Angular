import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/CourseService';
import { ModuleServices } from '../../services/ModuleServices';
import { LessonServices } from '../../services/LessonServices';
import { TopicServices } from '../../services/TopicServices';

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

  findModulesByCourseId = (courseId) =>
    this.moduleService.findModulesByCourse(courseId)
      .then(modules => this.modules = modules)

  findLessonsByModuleId = (moduleId) =>
    this.lessonService.findLessonsByModule(moduleId)
      .then(lessons => this.lessons = lessons)

  findTopicsByLessonId = (lessonId) =>
    this.topicService.findTopicsByLesson(lessonId)
      .then(topics => this.topics = topics)

  // findWidgetsByTopicId = (topicId) =>

  constructor(
    private courseService: CourseService,
    private moduleService: ModuleServices,
    private lessonService: LessonServices,
    private topicService: TopicServices
  ) { }

  ngOnInit(): void {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
    // Static, local read
    // fetch('http://wbdv-generic-server.herokuapp.com/api/cohenw/courses')
    //   .then(response => response.json())
    //   .then(courses => this.courses = courses);
  }


}
