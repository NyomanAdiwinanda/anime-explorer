import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DetailPageBackgroundProps {
	background: string;
}

export default function DetailPageBackground({ background }: DetailPageBackgroundProps) {
	if (!background) return null;
	return (
		<View style={styles.container}>
			<Text style={styles.sectionTitle}>Background</Text>
			<Text style={styles.backgroundText}>{background}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginTop: 0,
		marginBottom: 0,
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
	backgroundText: {
		color: "#EBEBEB",
		fontSize: 15,
		marginBottom: 8,
		lineHeight: 22,
	},
});
