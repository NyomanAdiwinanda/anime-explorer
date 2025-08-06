import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Genre {
	mal_id: number;
	name: string;
}

interface DetailPageGenresProps {
	genres?: Genre[];
}

export default function DetailPageGenres({ genres }: DetailPageGenresProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.sectionTitle}>Genres</Text>
			<View style={[styles.genreRow, { justifyContent: "flex-start", alignSelf: "flex-start" }]}>
				{genres?.map(genre => (
					<View key={genre.mal_id} style={styles.genreChip}>
						<Text style={styles.genreText}>{genre.name}</Text>
					</View>
				))}
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
