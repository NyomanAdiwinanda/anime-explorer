import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

interface DetailPageErrorProps {
	onRetry: () => void;
	onBack: () => void;
}

export default function DetailPageError({ onRetry, onBack }: DetailPageErrorProps) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerRow}>
				<TouchableOpacity style={styles.backButton} onPress={onBack}>
					<Text style={styles.backButtonIcon}>{"←"}</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.errorContainer}>
				<Text style={styles.errorText}>Failed to load anime details.</Text>
				<TouchableOpacity style={styles.retryButton} onPress={onRetry}>
					<Text style={styles.retryButtonText}>Retry</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#190C23",
	},
	errorContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	errorText: {
		color: "#fff",
		marginBottom: 16,
	},
	retryButton: {
		backgroundColor: "#6C47FF",
		borderRadius: 20,
		paddingVertical: 10,
		paddingHorizontal: 32,
	},
	retryButtonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16,
	},
	headerRow: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
		paddingHorizontal: 4,
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
});
