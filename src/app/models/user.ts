export class User{
    public username: string;
	public email: string;
	public password: string;
	public description: string;
	public avatarLink: string;
	public backgroundLink: string;

	public static makeFakeUser(): User{
		let user: User = new User();
		user.username = "Cal";
		user.password = "thebest";
		return user;
	}

}