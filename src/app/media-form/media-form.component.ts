import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostMediaEntry } from '../models/media-entry';
import { ControlContainer, NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.css']
})
export class MediaFormComponent implements OnInit {

  @Input()
  index: number;
  @Input()
  group: FormGroup;
  @Output()
  toDelete = new EventEmitter<number>();
  @Output()
  fileChanged = new EventEmitter<[number, File]>();

  constructor() { }

  ngOnInit() {
  }

  public removeForm(index: number){
    this.toDelete.emit(index);
  }

  public fileChange(event){
    const fileList: FileList = event.target.files;
    if(fileList.length > 0){
      const file = fileList.item(0);
      this.fileChanged.emit([this.index, file]);
    }
  }


}
