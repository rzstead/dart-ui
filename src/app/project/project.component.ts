import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public project: Project;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ProjectService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.service.getProject(id).subscribe(result => this.project = result.body);
  }

}
