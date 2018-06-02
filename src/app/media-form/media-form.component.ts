import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.css']
})
export class MediaFormComponent implements OnInit {

  @Input()
  index: number;
  @Output()
  toDelete = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  public removeForm(index: number){
    this.toDelete.emit(index);
  }

}
