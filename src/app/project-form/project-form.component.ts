import { Component, OnInit } from '@angular/core';
import { MediaFormComponent } from '../media-form/media-form.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  public mediaForms: MediaFormComponent[] = [new MediaFormComponent()];
  public form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  public addMediaInput(){
    this.mediaForms.push(new MediaFormComponent());
  }

  public onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('file').setValue(file);
    }
  }

  public onSubmit(){

  }

  public deleteChild(event){
    this.mediaForms.splice(event, 1);
  }

}
