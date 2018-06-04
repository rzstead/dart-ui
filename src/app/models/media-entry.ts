export class MediaEntry{
    public id: number;
    public description: string;    
    public mediaLink: string;
    public isVideo: boolean;

    public constructor(description: string, isVideo: boolean){
        this.description = description;
        this.isVideo = isVideo;
    }

}

export class PostMediaEntry{
    public description: string;    
    public media: File;
    public isVideo: boolean;

    public constructor(description: string, media: File, isVideo: boolean){
        this.description = description;
        this.media = media;
        this.isVideo = isVideo;
    }

    public toMediaEntry(): MediaEntry{
        return new MediaEntry(this.description, this.isVideo);
    }
}