import { Component, OnInit, Input } from '@angular/core';
import { ProjectThumbnail } from '../models/project-thumbnail';

@Component({
  selector: 'app-project-thumbnail',
  templateUrl: './project-thumbnail.component.html',
  styleUrls: ['./project-thumbnail.component.css']
})
export class ProjectThumbnailComponent implements OnInit {

  @Input()
  public projectThumb: ProjectThumbnail;

  constructor() { }

  ngOnInit() {
  }

}
