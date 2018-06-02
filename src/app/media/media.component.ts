import { Component, OnInit, Input } from '@angular/core';
import { MediaEntry } from '../models/media-entry';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  @Input()
  media: MediaEntry;

  constructor() { }

  ngOnInit() {
  }

}
