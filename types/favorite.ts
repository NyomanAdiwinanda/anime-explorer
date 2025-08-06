import { JikanImages } from "./jikan";

export interface Favorite {
	mal_id: number;
	title: string;
	images: JikanImages;
	rank?: number;
	score?: number;
	synopsis?: string;
}
