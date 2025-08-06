import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface DetailPageSynopsisProps {
	synopsis?: string;
}

export default function DetailPageSynopsis({ synopsis }: DetailPageSynopsisProps) {
	return (
		<View>
			<Text style={styles.sectionTitle}>Synopsis</Text>
			<Text style={styles.synopsisText}>{synopsis || "No synopsis available."}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	sectionTitle: {
		color: "#FFB800",
		fontWeight: "bold",
		fontSize: 24,
		marginTop: 16,
		marginBottom: 8,
		textAlign: "left",
		alignSelf: "flex-start",
	},
	synopsisText: {
		color: "#EBEBEB",
		fontSize: 15,
		marginBottom: 8,
		lineHeight: 22,
		textAlign: "left",
		alignSelf: "flex-start",
	},
});
