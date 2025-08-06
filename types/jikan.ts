export interface JikanPagination {
	last_visible_page: number;
	has_next_page: boolean;
	current_page: number;
	items: {
		count: number;
		total: number;
		per_page: number;
	};
}

export interface JikanImage {
	image_url: string;
	small_image_url?: string;
	large_image_url?: string;
}

export interface JikanImages {
	jpg: JikanImage;
	webp: JikanImage;
}

export interface JikanTrailerImages {
	image_url?: string;
	small_image_url?: string;
	medium_image_url?: string;
	large_image_url?: string;
	maximum_image_url?: string;
}

export interface JikanTrailer {
	youtube_id?: string;
	url?: string;
	embed_url?: string;
	images?: JikanTrailerImages;
}

export interface JikanTitle {
	type: string;
	title: string;
}

export interface JikanProducer {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface JikanGenre {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface JikanTheme {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface JikanAired {
	from?: string;
	to?: string;
	prop?: {
		from?: { day?: number; month?: number; year?: number };
		to?: { day?: number; month?: number; year?: number };
	};
	string?: string;
}

export interface JikanBroadcast {
	day?: string;
	time?: string;
	timezone?: string;
	string?: string;
}

export interface JikanAnime {
	mal_id: number;
	url: string;
	images: JikanImages;
	trailer?: JikanTrailer;
	approved?: boolean;
	titles?: JikanTitle[];
	title: string;
	title_english?: string;
	title_japanese?: string;
	title_synonyms?: string[];
	type?: string;
	source?: string;
	episodes?: number;
	status?: string;
	airing?: boolean;
	aired?: JikanAired;
	duration?: string;
	rating?: string;
	score?: number;
	scored_by?: number;
	rank?: number;
	popularity?: number;
	members?: number;
	favorites?: number;
	synopsis?: string;
	background?: string;
	season?: string;
	year?: number;
	broadcast?: JikanBroadcast;
	producers?: JikanProducer[];
	licensors?: JikanProducer[];
	studios?: JikanProducer[];
	genres?: JikanGenre[];
	explicit_genres?: JikanGenre[];
	themes?: JikanTheme[];
	demographics?: JikanGenre[];
}

export interface JikanAnimeListResponse {
	pagination: JikanPagination;
	data: JikanAnime[];
}
