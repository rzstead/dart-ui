import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Route, ActivatedRoute } from '@angular/router';
import { ProjectThumbnail } from '../models/project-thumbnail';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  projectList: ProjectThumbnail[];

  constructor(private route: ActivatedRoute, private userService: UserService, private projectService: ProjectService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.userService.getUser(id).subscribe(result => {
      this.user = result.body;
      this.projectService.getProjectsByUser(this.user.username).subscribe(result => {
        this.projectList = result.body.map(x => new ProjectThumbnail(x.id.toString(), x.title, x.user.username, x.gallery[0] == null ? "https://s3-eu-west-1.amazonaws.com/images.linnlive.com/c773d49a2bdaf759b0c8f16e4896f7c5/dcd26252-a3b0-4cfe-98ff-987ef8e69c80.jpg" : x.gallery[0].mediaLink, x.description));
      });
    });
  }

}
