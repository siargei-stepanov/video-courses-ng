export interface IUserState {
	user: IUserStateUser;
	token: string;
}
export interface IUserLoginPayload {
	login: string;
	password: string;
}

export const initialUserState: IUserState = {
	user: null,
	token: null,
};

export interface IUserStateUser {
	id: number;
	name: {
		first: string;
		last: string;
	};
	fullName: string;
}
