import React from "react";
import { View, StyleSheet } from "react-native";

export default function AnimeListSkeleton() {
	return (
		<View style={{ flex: 1, paddingTop: 8 }}>
			{[...Array(6)].map((_, i) => (
				<View key={i} style={styles.card}>
					<View style={styles.image} />
					<View style={styles.infoContainer}>
						<View style={styles.title} />
						<View style={styles.chipRow}>
							<View style={styles.chip} />
							<View style={styles.chip} />
						</View>
						<View style={styles.synopsis} />
					</View>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
		backgroundColor: "#2D2336",
		marginHorizontal: 12,
		marginVertical: 8,
		borderRadius: 8,
		borderColor: "#40384A",
		borderWidth: 0.5,
		minHeight: 150,
		overflow: "hidden",
	},
	image: {
		width: 100,
		height: 150,
		borderRadius: 8,
		backgroundColor: "#40384A",
		opacity: 0.5,
	},
	infoContainer: {
		marginLeft: 12,
		flex: 1,
		justifyContent: "flex-start",
		paddingVertical: 8,
	},
	title: {
		width: "70%",
		height: 22,
		borderRadius: 6,
		backgroundColor: "#40384A",
		marginBottom: 12,
		opacity: 0.5,
	},
	chipRow: {
		flexDirection: "row",
		marginBottom: 12,
		gap: 8,
	},
	chip: {
		width: 70,
		height: 28,
		borderRadius: 16,
		backgroundColor: "#6C47FF",
		marginRight: 8,
		opacity: 0.3,
	},
	synopsis: {
		width: "90%",
		height: 40,
		borderRadius: 8,
		backgroundColor: "#40384A",
		opacity: 0.2,
	},
});
