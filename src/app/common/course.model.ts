export interface ICourse {
	id: number;
	name: string;
	date: string;
	length: number;
	description: string;
	isTopRated: boolean;
	authors: Author[];
}

export class Course implements ICourse {
	constructor(
		public id: number,
		public name: string,
		public date: string,
		public length: number,
		public description: string,
		public isTopRated: boolean,
		public authors: Author[]
	) {}
}

export interface Author {
	id: string;
	name: string;
}
