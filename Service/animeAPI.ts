import { Genre } from "@/types/genre";
import { JikanAnimeListResponse } from "@/types/jikan";

import { JikanAnime } from "@/types/jikan";

export const animeAPI = {
	fetchAnimeList: async (page: number = 1, pickedFilter: Genre | null = null): Promise<JikanAnimeListResponse> => {
		const url = `https://api.jikan.moe/v4/anime?page=${page}${pickedFilter ? `&genres=${pickedFilter.mal_id}` : ""}`;
		const res = await fetch(url);
		if (!res.ok) throw new Error("Failed to fetch anime list");
		return res.json();
	},

	fetchGenres: async (): Promise<Genre[]> => {
		const res = await fetch("https://api.jikan.moe/v4/genres/anime");
		if (!res.ok) throw new Error("Failed to fetch genres");
		const { data } = await res.json();
		return data;
	},

	fetchAnimeDetail: async (id: string | number): Promise<JikanAnime> => {
		const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
		if (!res.ok) throw new Error("Failed to fetch anime detail");
		const data = await res.json();
		return data.data;
	},
};
