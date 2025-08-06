import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { JikanAnime } from "@/types/jikan";

interface DetailPageInfoProps {
	anime: JikanAnime;
}

export default function DetailPageInfo({ anime }: DetailPageInfoProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.sectionTitle}>Info</Text>
			<View style={[styles.infoRowCreative, { alignSelf: "flex-start" }]}>
				<View style={styles.infoChipRow}>
					<View style={[styles.infoChip, { backgroundColor: "#6C47FF" }]}>
						<Text style={styles.infoChipText}>Type</Text>
						<Text style={styles.infoChipValue}>{anime.type}</Text>
					</View>
					<View style={[styles.infoChip, { backgroundColor: "#FFB800" }]}>
						<Text style={styles.infoChipText}>Source</Text>
						<Text style={styles.infoChipValue}>{anime.source}</Text>
					</View>
					<View style={[styles.infoChip, { backgroundColor: "#2D2336" }]}>
						<Text style={styles.infoChipText}>Status</Text>
						<Text style={styles.infoChipValue}>{anime.status}</Text>
					</View>
				</View>
				<View style={styles.infoChipRow}>
					<View style={[styles.infoChip, { backgroundColor: "#40384A" }]}>
						<Text style={styles.infoChipText}>Season</Text>
						<Text style={styles.infoChipValue}>
							{anime.season} {anime.year}
						</Text>
					</View>
					<View style={[styles.infoChip, { backgroundColor: "#6C47FF" }]}>
						<Text style={styles.infoChipText}>Duration</Text>
						<Text style={styles.infoChipValue}>{anime.duration}</Text>
					</View>
					<View style={[styles.infoChip, { backgroundColor: "#FFB800" }]}>
						<Text style={styles.infoChipText}>Rating</Text>
						<Text style={styles.infoChipValue}>{anime.rating}</Text>
					</View>
				</View>
				<View style={styles.infoChipRow}>
					<View style={[styles.infoChip, { backgroundColor: "#2D2336" }]}>
						<Text style={styles.infoChipText}>Popularity</Text>
						<Text style={styles.infoChipValue}>{anime.popularity}</Text>
					</View>
					<View style={[styles.infoChip, { backgroundColor: "#6C47FF" }]}>
						<Text style={styles.infoChipText}>Score</Text>
						<Text style={styles.infoChipValue}>{anime.score}</Text>
					</View>
					<View style={[styles.infoChip, { backgroundColor: "#FFB800" }]}>
						<Text style={styles.infoChipText}>Rank</Text>
						<Text style={styles.infoChipValue}>{anime.rank}</Text>
					</View>
				</View>
				<View style={styles.infoChipRow}>
					<View style={[styles.infoChip, { backgroundColor: "#40384A" }]}>
						<Text style={styles.infoChipText}>Scored By</Text>
						<Text style={styles.infoChipValue}>{anime.scored_by}</Text>
					</View>
					<View style={[styles.infoChip, { backgroundColor: "#2D2336" }]}>
						<Text style={styles.infoChipText}>Members</Text>
						<Text style={styles.infoChipValue}>{anime.members}</Text>
					</View>
					<View style={[styles.infoChip, { backgroundColor: "#6C47FF" }]}>
						<Text style={styles.infoChipText}>Favorites</Text>
						<Text style={styles.infoChipValue}>{anime.favorites}</Text>
					</View>
				</View>
				<View style={styles.infoChipRow}>
					<View style={[styles.infoChip, { backgroundColor: "#FFB800" }]}>
						<Text style={styles.infoChipText}>Studios</Text>
						<Text style={styles.infoChipValue}>{anime.studios?.map(s => s.name).join(", ")}</Text>
					</View>
					<View style={[styles.infoChip, { backgroundColor: "#2D2336" }]}>
						<Text style={styles.infoChipText}>Producers</Text>
						<Text style={styles.infoChipValue}>{anime.producers?.map(p => p.name).join(", ")}</Text>
					</View>
					<View style={[styles.infoChip, { backgroundColor: "#40384A" }]}>
						<Text style={styles.infoChipText}>Licensors</Text>
						<Text style={styles.infoChipValue}>{anime.licensors?.map(l => l.name).join(", ")}</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	sectionTitle: {
		color: "#FFB800",
		fontWeight: "bold",
		fontSize: 24,
		marginTop: 16,
		marginBottom: 8,
		textAlign: "left",
		alignSelf: "flex-start",
	},
	infoRowCreative: {
		marginTop: 8,
		marginBottom: 8,
		width: "100%",
	},
	infoChipRow: {
		flexDirection: "row",
		justifyContent: "flex-start",
		marginBottom: 8,
		gap: 8,
	},
	infoChip: {
		borderRadius: 14,
		paddingHorizontal: 12,
		paddingVertical: 10,
		minWidth: 90,
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flex: 1,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.08,
		shadowRadius: 4,
		elevation: 2,
	},
	infoChipText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16,
		marginBottom: 6,
		letterSpacing: 0.5,
	},
	infoChipValue: {
		color: "#EBEBEB",
		fontSize: 14,
		fontWeight: "500",
	},
});
