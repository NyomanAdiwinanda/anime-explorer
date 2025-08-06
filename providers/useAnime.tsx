import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { JikanAnime } from "@/types/jikan";
import { animeAPI } from "@/Service/animeAPI";
import { Favorite } from "@/types/favorite";
import { Genre } from "@/types/genre";
import { AsyncStorageItem } from "@/constants/AsyncStorageItem";

type AnimeContextType = {
	fetchList: () => Promise<void>;
	fetchNextPage: () => Promise<void>;
	saveToFavorite: (animeData: JikanAnime) => Promise<void>;
	removeFromFavorite: (animeData: JikanAnime) => Promise<void>;
	setPickedFilter: (filter: Genre | null) => void;
	animeList: JikanAnime[];
	favoriteList: Favorite[];
	genreList: Genre[];
	pickedFilter: Genre | null;
	hasNextPage: boolean;
	loading: boolean;
	hasError: boolean;
};

const AnimeContext = createContext<AnimeContextType>({
	fetchList: async () => Promise.resolve(),
	fetchNextPage: async () => Promise.resolve(),
	saveToFavorite: async () => Promise.resolve(),
	removeFromFavorite: async () => Promise.resolve(),
	setPickedFilter: () => {},
	animeList: [],
	favoriteList: [],
	genreList: [],
	pickedFilter: null,
	hasNextPage: false,
	loading: true,
	hasError: false,
});

export const useAnime = () => {
	return useContext(AnimeContext);
};

export const AnimeProvider = ({ children }: { children: ReactNode }) => {
	const [animeList, setAnimeList] = useState<JikanAnime[]>([]);
	const [favoriteList, setFavoriteList] = useState<Favorite[]>([]);
	const [genreList, setGenreList] = useState<Genre[]>([]);
	const [pickedFilter, setPickedFilter] = useState<Genre | null>(null);
	const [hasNextPage, setHasNextPage] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const [page, setPage] = useState(1);
	const [hasError, setError] = useState(false);

	const fetchList = async () => {
		try {
			setLoading(true);
			setError(false);

			const data = await animeAPI.fetchAnimeList(1, pickedFilter);
			setHasNextPage(data.pagination.has_next_page);
			setAnimeList(data.data);
			setPage(2);
		} catch (_) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	const fetchNextPage = async () => {
		try {
			const data = await animeAPI.fetchAnimeList(page, pickedFilter);
			setHasNextPage(data.pagination.has_next_page);
			setAnimeList((prev: JikanAnime[]) => [...prev, ...data.data]);
			setPage(page + 1);
		} catch (_) {
			setError(true);
		}
	};

	const getFavorite = async () => {
		const stored = await AsyncStorage.getItem(AsyncStorageItem.favorites);
		if (stored) {
			const parsed: Favorite[] = JSON.parse(stored);
			setFavoriteList(parsed);
		}
	};

	const saveToFavorite = async (animeData: JikanAnime) => {
		try {
			const favorite: Favorite = {
				mal_id: animeData.mal_id,
				title: animeData.title,
				images: animeData.images,
				rank: animeData?.rank,
				score: animeData?.score,
				synopsis: animeData?.synopsis,
			};

			setFavoriteList(prev => {
				const updated = [...prev, favorite];
				AsyncStorage.setItem(AsyncStorageItem.favorites, JSON.stringify(updated));
				return updated;
			});
		} catch (_) {
			setError(true);
		}
	};

	const removeFromFavorite = async (animeData: JikanAnime) => {
		try {
			setFavoriteList(prev => {
				const updated = prev.filter(fav => fav.mal_id !== animeData.mal_id);
				AsyncStorage.setItem(AsyncStorageItem.favorites, JSON.stringify(updated));
				return updated;
			});
		} catch (_) {
			setError(true);
		}
	};

	const fetchGenre = async () => {
		try {
			const data = await animeAPI.fetchGenres();
			setGenreList(data);
		} catch (_) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchList();
	}, [pickedFilter]);

	useEffect(() => {
		fetchGenre();
		getFavorite();
	}, []);

	return (
		<AnimeContext.Provider
			value={{
				animeList,
				favoriteList,
				genreList,
				pickedFilter,
				hasNextPage,
				loading,
				hasError,
				fetchList,
				fetchNextPage,
				saveToFavorite,
				removeFromFavorite,
				setPickedFilter,
			}}
		>
			{children}
		</AnimeContext.Provider>
	);
};
