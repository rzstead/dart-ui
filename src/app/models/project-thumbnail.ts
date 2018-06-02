import { Project } from "./project";

export class ProjectThumbnail{
    public title: string;
    public username: string;
    public thumbnailLink: string;
    public description: string;
    public id: string;
    
    public constructor(id:string, title: string, username: string, thumbnailLink: string, description: string){
        this.id = id;
        this.title = title;
        this.username = username;
        this.thumbnailLink = thumbnailLink;
        this.description = description;
    }
}