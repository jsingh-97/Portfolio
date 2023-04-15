interface Image {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	}
}

interface Point {
	title: string;
	point: string[]
}

export interface Experience {
	id: number;
	type?: "experience";
	company: string;
	companyImage: any;
	dateStarted: string;
	dateEnded: string;
	companyUrl: string;
	isCurrentlyWorkingHere: boolean;
	jobTitle: string;
	points: {
		title: string;
		point: string[];
	}[]
	technologies: string[];
}