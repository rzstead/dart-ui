import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { ProjectThumbnail } from '../models/project-thumbnail';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  public projectList: ProjectThumbnail[];

  constructor(private projectService: ProjectService) {
    projectService.getProjects().subscribe(res => this.projectList = res.body.map(x=> new ProjectThumbnail(x.id.toString(), x.title, "Cal", "https://vignette.wikia.nocookie.net/fictspedia/images/3/39/Birb.png/revision/latest?cb=20170302044225", x.description)))
   }

  ngOnInit() {
  }

}
