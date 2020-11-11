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

  constructor(
    private activeRoute: ActivatedRoute,
    private moduleService: ModuleServices
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const courseId = params.cid;
      console.log("Load modules for cid: " + courseId);
      if (typeof courseId !== 'undefined') {
        this.moduleService.findModulesByCourse(courseId)
            .then(modules => this.modules = modules);
      }
    });
  }

}
