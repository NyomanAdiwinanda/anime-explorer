import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

interface HomePageErrorProps {
	onRetry: () => void;
}

export default function HomePageError({ onRetry }: HomePageErrorProps) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.centerContent}>
				<Text style={styles.errorText}>{"There's something wrong. please try again"}</Text>
				<TouchableOpacity style={styles.retryButton} onPress={onRetry} activeOpacity={0.8}>
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
	centerContent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	errorText: {
		color: "#fff",
		fontSize: 16,
		marginBottom: 20,
		textAlign: "center",
	},
	retryButton: {
		backgroundColor: "#6C47FF",
		borderRadius: 20,
		paddingVertical: 12,
		paddingHorizontal: 32,
	},
	retryButtonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16,
	},
});
