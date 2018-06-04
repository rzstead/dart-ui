import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ROUTER_CONFIGURATION, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProjectComponent } from './project/project.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { MediaComponent } from './media/media.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { LoginComponent } from './login/login.component';
import { ProjectThumbnailComponent } from './project-thumbnail/project-thumbnail.component';
import { ProjectService } from './services/project.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProjectFormComponent } from './project-form/project-form.component';
import { MediaFormComponent } from './media-form/media-form.component';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  { path: 'project/:id', component: ProjectComponent },
  { path: 'projects', component: ProjectListComponent }, 
  { path: 'add-project', component: ProjectFormComponent },    
  { path: 'challenges', component: ChallengeListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'challenge/:id', component: ChallengeComponent },
  { path: 'user/:id', component: UserComponent },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjectComponent,
    ChallengeComponent,
    MediaComponent,
    PageNotFoundComponent,
    ProjectListComponent,
    ChallengeListComponent,
    LoginComponent,
    ProjectThumbnailComponent,
    ProjectFormComponent,
    MediaFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectService,
    UserService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
