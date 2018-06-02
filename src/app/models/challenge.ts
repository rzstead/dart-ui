import { Submission } from './submission';
export class Challenge {
    public challengeId: number;
	public title: string;
	public description: string;
	public startDate: Date;
    public endDate: Date;
    public submissions: Submission[];
}