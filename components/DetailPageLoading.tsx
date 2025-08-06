import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailPageLoading() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
				<View style={styles.skeletonCover} />
				<View style={styles.skeletonTitle} />
				<View style={styles.skeletonSubTitle} />
				<View style={styles.chipRowCenter}>
					<View style={styles.skeletonChip} />
					<View style={styles.skeletonChip} />
					<View style={styles.skeletonChip} />
				</View>
				<View style={styles.skeletonSectionTitle} />
				<View style={styles.skeletonParagraph} />
				<View style={styles.skeletonSectionTitle} />
				<View style={styles.skeletonGenreRow}>
					<View style={styles.skeletonGenreChip} />
					<View style={styles.skeletonGenreChip} />
					<View style={styles.skeletonGenreChip} />
				</View>
				<View style={styles.skeletonSectionTitle} />
				<View style={styles.infoRowCreative}>
					{[1, 2, 3, 4, 5].map(row => (
						<View key={row} style={styles.infoChipRow}>
							<View style={styles.skeletonInfoChip} />
							<View style={styles.skeletonInfoChip} />
							<View style={styles.skeletonInfoChip} />
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#190C23",
	},
	scrollView: {
		flex: 1,
	},
	contentContainer: {
		alignItems: "center",
		padding: 20,
	},
	skeletonCover: {
		width: 260,
		height: 360,
		borderRadius: 18,
		marginBottom: 18,
		backgroundColor: "#2D2336",
		opacity: 0.5,
	},
	skeletonTitle: {
		width: 180,
		height: 32,
		borderRadius: 8,
		backgroundColor: "#40384A",
		marginBottom: 8,
		opacity: 0.5,
	},
	skeletonSubTitle: {
		width: 120,
		height: 22,
		borderRadius: 6,
		backgroundColor: "#40384A",
		marginBottom: 12,
		opacity: 0.4,
	},
	chipRowCenter: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 8,
		marginBottom: 12,
		gap: 8,
	},
	skeletonChip: {
		width: 70,
		height: 28,
		borderRadius: 16,
		backgroundColor: "#40384A",
		marginRight: 8,
		opacity: 0.4,
	},
	skeletonSectionTitle: {
		width: 120,
		height: 24,
		borderRadius: 8,
		backgroundColor: "#FFB800",
		marginTop: 16,
		marginBottom: 8,
		opacity: 0.3,
	},
	skeletonParagraph: {
		width: "100%",
		height: 60,
		borderRadius: 8,
		backgroundColor: "#40384A",
		marginBottom: 8,
		opacity: 0.2,
	},
	skeletonGenreRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 8,
		marginBottom: 8,
	},
	skeletonGenreChip: {
		width: 60,
		height: 22,
		borderRadius: 12,
		backgroundColor: "#2D2336",
		marginRight: 8,
		marginBottom: 8,
		opacity: 0.3,
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
	skeletonInfoChip: {
		borderRadius: 14,
		paddingHorizontal: 12,
		paddingVertical: 10,
		minWidth: 90,
		height: 48,
		backgroundColor: "#40384A",
		flex: 1,
		marginRight: 8,
		opacity: 0.2,
	},
});
