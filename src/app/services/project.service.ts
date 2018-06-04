import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse, HttpRequest, HttpEvent } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { MediaEntry, PostMediaEntry } from '../models/media-entry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<HttpResponse<Project[]>> {
    return this.http.get<Project[]>(environment.apiLocation + "/project", { observe: 'response' });
  }

  public getProjectsByUser(username: String): Observable<HttpResponse<Project[]>> {
    return this.http.get<Project[]>(environment.apiLocation + "/project/user/" + username, { observe: 'response' });
  }

  public getProject(id: string): Observable<HttpResponse<Project>> {
    return this.http.get<Project>(environment.apiLocation + "/project/" + id, { observe: 'response' });
  }

  public addProject(project: Project): Observable<HttpResponse<Project>> {
    return this.http.post<Project>(environment.apiLocation + "/project", project, { observe: 'response' });
  }

  public addMedia(id: number, mediaEntry: PostMediaEntry): Observable<HttpResponse<MediaEntry>> {
    return this.http.post<MediaEntry>(environment.apiLocation + "/project/" + id + "/media", mediaEntry, { observe: 'response' });
  }

  public addMediaLinkToEntry(id: number, file: File, isVideo: boolean): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    return this.http.post(environment.apiLocation + "/media-entry/" + id + "/uploadMedia/" + isVideo, formdata, { observe: 'response', headers: new HttpHeaders() });
  }

} 
