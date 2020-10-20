export interface ICourse {
	id: number;
	title: string;
	creationDate: string;
	duration: number;
	description: string;
}

export class Course implements ICourse {
	constructor(
		public id: number,
		public title: string,
		public creationDate: string,
		public duration: number,
		public description: string) { }
}
