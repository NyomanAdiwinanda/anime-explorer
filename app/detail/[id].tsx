import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useAnime } from "@/providers/useAnime";
import DetailPageLoading from "@/components/DetailPageLoading";
import DetailPageError from "@/components/DetailPageError";
import DetailPageSynopsis from "@/components/DetailPageSynopsis";
import DetailPageGenres from "@/components/DetailPageGenres";
import DetailPageInfo from "@/components/DetailPageInfo";
import DetailPageBackground from "@/components/DetailPageBackground";
import RenderIf from "@/utils/RenderIf";
import { JikanAnime } from "@/types/jikan";
import { animeAPI } from "@/Service/animeAPI";

export default function AnimeDetailScreen() {
	const router = useRouter();
	const { id } = useLocalSearchParams();
	const { favoriteList, saveToFavorite, removeFromFavorite } = useAnime();
	const [anime, setAnime] = useState<JikanAnime | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const isFavorited = (): boolean => {
		if (!anime) return false;
		return favoriteList.some(fav => fav.mal_id === anime.mal_id);
	};

	const handleFavoriteAction = (animeData: JikanAnime) => {
		if (isFavorited()) {
			removeFromFavorite(animeData);
		} else {
			saveToFavorite(animeData);
		}
	};

	const fetchDetail = async () => {
		try {
			setLoading(true);
			setError(false);

			const animeData = await animeAPI.fetchAnimeDetail(id as string);
			setAnime(animeData);
		} catch (e) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchDetail();
	}, [id]);

	if (loading) {
		return <DetailPageLoading />;
	}

	if (error || !anime) {
		return <DetailPageError onRetry={fetchDetail} onBack={() => router.back()} />;
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerRow}>
				<TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
					<Text style={styles.backButtonIcon}>{"←"}</Text>
				</TouchableOpacity>
				<View style={{ flex: 1 }} />
				<TouchableOpacity
					style={styles.loveButton}
					onPress={() => handleFavoriteAction(anime)}
					accessibilityLabel={isFavorited() ? "Remove from favorites" : "Add to favorites"}
				>
					<AntDesign
						size={26}
						style={{ marginBottom: -3 }}
						color={isFavorited() ? "#FF4F8B" : "#fff"}
						name={isFavorited() ? "heart" : "hearto"}
					/>
				</TouchableOpacity>
			</View>
			<ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentContainer}>
				<Image
					source={{ uri: anime.images.jpg.large_image_url || anime.images.jpg.image_url }}
					style={styles.bigCoverImage}
				/>
				<Text style={styles.titleCenter}>{anime.title}</Text>
				<RenderIf isTrue={Boolean(anime.title_english && anime.title_english !== anime.title)}>
					<Text style={styles.subTitleCenter}>{anime.title_english}</Text>
				</RenderIf>
				<View style={styles.chipRowCenter}>
					<View style={[styles.chip, { backgroundColor: "#6C47FF" }]}>
						<Text style={styles.chipText}>Rank: {anime.rank ?? "-"}</Text>
					</View>
					<View style={[styles.chip, { backgroundColor: "#FFB800" }]}>
						<Text style={[styles.chipText, { color: "#222" }]}>Score: {anime.score ?? "-"}</Text>
					</View>
					<View style={[styles.chip, { backgroundColor: "#2D2336" }]}>
						<Text style={styles.chipText}>Episodes: {anime.episodes ?? "-"}</Text>
					</View>
				</View>
				<View style={styles.genreRow}>
					{anime.genres?.map(genre => (
						<View key={genre.mal_id} style={styles.genreChip}>
							<Text style={styles.genreText}>{genre.name}</Text>
						</View>
					))}
				</View>
				<RenderIf isTrue={Boolean(anime.trailer?.url)}>
					<TouchableOpacity
						style={styles.trailerButtonCenter}
						onPress={() => Linking.openURL(anime.trailer?.url as string)}
					>
						<Text style={styles.trailerButtonText}>Watch Trailer</Text>
					</TouchableOpacity>
				</RenderIf>
				<DetailPageSynopsis synopsis={anime.synopsis} />
				<DetailPageGenres genres={anime.genres} />
				<DetailPageInfo anime={anime} />
				<DetailPageBackground background={anime.background || ""} />
				<View style={{ height: 32 }} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#190C23",
	},
	contentContainer: {
		alignItems: "center",
		padding: 20,
	},
	headerRow: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
		paddingHorizontal: 4,
	},
	loveButton: {
		borderRadius: 20,
		width: 44,
		height: 44,
		marginRight: 8,
		marginTop: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	backButton: {
		borderRadius: 20,
		width: 44,
		height: 44,
		marginLeft: 8,
		marginTop: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	backButtonIcon: {
		color: "#fff",
		fontSize: 22,
		fontWeight: "bold",
	},
	bigCoverImage: {
		width: 260,
		height: 360,
		borderRadius: 18,
		marginBottom: 18,
		backgroundColor: "#40384A",
		alignSelf: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 8,
		elevation: 8,
	},
	titleCenter: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 28,
		textAlign: "center",
		marginBottom: 4,
	},
	subTitleCenter: {
		color: "#EBEBEB",
		fontSize: 18,
		textAlign: "center",
		marginBottom: 10,
	},
	chipRowCenter: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 8,
		marginBottom: 12,
		gap: 8,
	},
	trailerButtonCenter: {
		backgroundColor: "#6C47FF",
		borderRadius: 20,
		paddingVertical: 10,
		paddingHorizontal: 24,
		alignSelf: "center",
		marginBottom: 16,
		marginTop: 4,
	},
	chip: {
		borderRadius: 16,
		paddingHorizontal: 12,
		paddingVertical: 6,
		marginRight: 8,
		alignItems: "center",
		justifyContent: "center",
		minWidth: 48,
	},
	chipText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 13,
	},
	trailerButtonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16,
	},
	genreRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 8,
		marginBottom: 8,
	},
	genreChip: {
		backgroundColor: "#2D2336",
		borderRadius: 12,
		paddingHorizontal: 10,
		paddingVertical: 4,
		marginRight: 8,
		marginBottom: 8,
	},
	genreText: {
		color: "#fff",
		fontSize: 13,
	},
});
