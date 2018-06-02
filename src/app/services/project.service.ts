import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse, HttpRequest } from '@angular/common/http'
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

  public getProject(id: string): Observable<HttpResponse<Project>> {
    return this.http.get<Project>(environment.apiLocation + "/project/" + id, { observe: 'response' });
  }

  public addProject(project: Project): Observable<HttpResponse<{}>> {
    return this.http.post(environment.apiLocation + "/project", project, { observe: 'response' });
  }

  private addMedia(id: string, mediaEntry: PostMediaEntry): Observable<HttpResponse<MediaEntry>> {
    return this.http.post<MediaEntry>(environment.apiLocation + "/project/" + id + "/media", mediaEntry, { observe: 'response' });
  }

  private addMediaLinkToEntry(entry: MediaEntry, file: File): Observable<HttpResponse<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    return this.http.post(environment.apiLocation + "/media-entry/" + entry.id + "/media", formdata, { observe: 'response' });
  }

} 
