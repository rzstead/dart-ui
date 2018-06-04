import { Component, OnInit } from '@angular/core';
import { MediaFormComponent } from '../media-form/media-form.component';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { Project } from '../models/project';
import { User } from '../models/user';
import { ProjectService } from '../services/project.service';
import { PostMediaEntry } from '../models/media-entry';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  public project: Project = new Project();
  public projectForm: FormGroup;
  public index: number = 0;

  constructor(private projectService: ProjectService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.project.user = User.makeFakeUser();
    this.projectForm = this.formBuilder.group({
      title: new FormControl([this.project.title], Validators.required),
      description: new FormControl([this.project.description], Validators.required),
      mediaEntries: this.formBuilder.array([])
    });
    this.addMediaInput();
  }

  public addMediaInput() {
    const control = <FormArray>this.projectForm.controls['mediaEntries'];
    let formGroup = this.initFormGroup("mediaDesc" + this.index, "file" + this.index, "isVideo" + this.index)
    control.push(formGroup);
    this.index++;
  }

  public initFormGroup(descName, fileName, isVideo) {
    return this.formBuilder.group({
      [descName]: new FormControl('', Validators.required),
      [fileName]: new FormControl(null, Validators.required),
      [isVideo]: new FormControl(false)
    })
  }

  public onSubmit(form) {
    this.project.description = form.description;
    this.project.title = form.title;
    let postEntries: PostMediaEntry[] = [];
    this.projectService.addProject(this.project).subscribe(projResult => {
      if (projResult.status == 200) {
        for (let i = 0; i < form.mediaEntries.length; i++) {
          let formGroup = form.mediaEntries[i];
          let postEntry: PostMediaEntry = new PostMediaEntry(formGroup["mediaDesc" + i], formGroup["file" + i], formGroup["isVideo" + i]);
          postEntries.push(postEntry);
        }
        postEntries.forEach(entry => {
          this.projectService.addMedia(projResult.body.id, entry).subscribe(mediaResult => {
            if (mediaResult.status === 200) {
              this.projectService.addMediaLinkToEntry(mediaResult.body.id, entry.media, entry.isVideo).subscribe(result => {
                this.router.navigate(['/project', projResult.body.id])
                console.log("done!")
              });
            }
          });
        });
      }
    });
  }

  public deleteChild(event) {
    const control = <FormArray>this.projectForm.controls['mediaEntries'];
    control.controls.splice(event, 1);
    this.index = event;
  }

  public updateFile(event: [number, File]){
    let group: FormGroup = <FormGroup>(<FormArray>this.projectForm.controls['mediaEntries']).controls[event[0]];
    let filename = "file" + event[0];
    group.patchValue({
      [filename]: event[1]
    });
  }

  private determineFileType(file: File): boolean {
    var blob = file;
    return true;
  }

}
