import { MediaEntry } from "./media-entry";
import { User } from "./user";

export class Project{
    public id: number;
    public description: string;
    public title: string;
    public user: User;
    public gallery: MediaEntry[];
    public postDate: Date;
}