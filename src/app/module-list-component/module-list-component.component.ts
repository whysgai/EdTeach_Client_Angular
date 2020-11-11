import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServices} from '../../services/ModuleServices';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {

  modules = [];
  moduleId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private moduleService: ModuleServices
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const courseId = params.cid;
      this.moduleId = params.mid;
      if (typeof courseId !== 'undefined') {
        this.moduleService.findModulesByCourse(courseId)
            .then(modules => this.modules = modules);
      }
    });
  }

}
