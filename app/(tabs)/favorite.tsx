import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useAnime } from "@/providers/useAnime";
import AnimeCard from "@/components/AnimeCard";

export default function FavoritesScreen() {
	const { favoriteList } = useAnime();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerWrapper}>
				<Text style={styles.header}>My Favorites</Text>
			</View>
			<View style={styles.listWrapper}>
				{favoriteList.length === 0 ? (
					<View style={styles.emptyWrapper}>
						<Text style={styles.emptyText}>You have empty favorite</Text>
					</View>
				) : (
					<FlashList
						data={favoriteList}
						keyExtractor={(_, index) => index.toString()}
						estimatedItemSize={100}
						renderItem={({ item }) => <AnimeCard item={item} />}
					/>
				)}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#190C23",
	},
	headerWrapper: {
		paddingHorizontal: 16,
		paddingTop: 24,
	},
	header: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 24,
		marginBottom: 12,
	},
	listWrapper: {
		flex: 1,
	},
	emptyWrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	emptyText: {
		color: "#fff",
		fontSize: 16,
		marginTop: 32,
		fontWeight: "500",
	},
	footerLoading: {
		padding: 16,
		alignItems: "center",
	},
});
