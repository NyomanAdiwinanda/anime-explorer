import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { JikanAnime } from "@/types/jikan";
import { Favorite } from "@/types/favorite";

interface AnimeCardProps {
	item: JikanAnime | Favorite;
}

export default function AnimeCard({ item }: AnimeCardProps) {
	const router = useRouter();
	return (
		<TouchableOpacity style={styles.card} activeOpacity={0.6} onPress={() => router.push(`/detail/${item.mal_id}`)}>
			<View style={styles.row}>
				<Image source={{ uri: item.images.jpg.image_url }} style={styles.coverImage} />
				<View style={styles.infoContainer}>
					<Text style={styles.title}>{item.title}</Text>
					<View style={styles.chipRow}>
						<View style={styles.rankChip}>
							<Text style={styles.rankChipText}>Rank: {item.rank}</Text>
						</View>
						<View style={styles.scoreChip}>
							<Text style={styles.scoreChipText}>Score: {item.score}</Text>
						</View>
					</View>
					<Text numberOfLines={3} style={styles.synopsis}>
						{item.synopsis}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#2D2336",
		marginHorizontal: 12,
		marginVertical: 8,
		borderRadius: 8,
		borderColor: "#40384A",
		borderWidth: 0.5,
	},
	row: {
		flexDirection: "row",
		maxHeight: 150,
	},
	coverImage: {
		width: 100,
		height: 150,
		borderRadius: 8,
	},
	infoContainer: {
		marginLeft: 12,
		flex: 1,
		justifyContent: "flex-start",
	},
	title: {
		fontWeight: "bold",
		fontSize: 16,
		paddingVertical: 8,
		color: "#EDEDED",
	},
	chipRow: {
		flexDirection: "row",
		marginBottom: 12,
	},
	rankChip: {
		backgroundColor: "#6C47FF",
		borderRadius: 16,
		paddingHorizontal: 12,
		paddingVertical: 6,
		marginRight: 8,
		alignItems: "center",
		justifyContent: "center",
		minWidth: 48,
	},
	rankChipText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 13,
	},
	scoreChip: {
		backgroundColor: "#FFB800",
		borderRadius: 16,
		paddingHorizontal: 12,
		paddingVertical: 6,
		alignItems: "center",
		justifyContent: "center",
		minWidth: 48,
	},
	scoreChipText: {
		color: "#222",
		fontWeight: "bold",
		fontSize: 13,
	},
	synopsis: {
		color: "#EBEBEB",
	},
});
