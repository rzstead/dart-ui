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
    projectService.getProjects().subscribe(res => {
      this.projectList = res.body.map(
        x => new ProjectThumbnail(
          x.id.toString(),
          x.title,
          x.user == null ? "Cal" : x.user.username,
          x.gallery.length > 0 && x.gallery[0].mediaLink != null ? x.gallery[0].mediaLink : "https://s3-eu-west-1.amazonaws.com/images.linnlive.com/c773d49a2bdaf759b0c8f16e4896f7c5/dcd26252-a3b0-4cfe-98ff-987ef8e69c80.jpg",
          x.description)
        )
      }
    );
  }

  ngOnInit() {
  }

}
