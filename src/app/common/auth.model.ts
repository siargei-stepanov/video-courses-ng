export interface TokenData {
	token: string;
}

export interface UserData {
	id: number;
	fakeToken: string;
	name: {
		first: string;
		last: string;
	};
	login: string;
	password: string;
}

export interface ILoginFormModel {
	login: string;
	password: string;
}
