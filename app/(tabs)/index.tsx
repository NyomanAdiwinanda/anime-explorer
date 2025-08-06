import React, { useRef, useCallback, useMemo } from "react";
import { Text, View, SafeAreaView, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FlashList } from "@shopify/flash-list";
import { useAnime } from "@/providers/useAnime";
import AnimeCard from "@/components/AnimeCard";
import HomePageLoading from "@/components/HomePageLoading";
import HomePageError from "@/components/HomePageError";

export default function AnimeListScreen() {
	const {
		animeList,
		genreList,
		pickedFilter,
		hasNextPage,
		loading,
		hasError,
		fetchList,
		fetchNextPage,
		setPickedFilter,
	} = useAnime();
	const sheetRef = useRef<BottomSheet>(null);
	const snapPoints = useMemo(() => ["92", "92%"], []);

	const handleOpenSheet = useCallback(() => {
		if (!pickedFilter) {
			sheetRef.current?.snapToIndex(1);
		} else {
			setPickedFilter(null);
		}
	}, [pickedFilter]);

	const handleCloseSheet = useCallback(() => {
		sheetRef.current?.close();
	}, []);

	if (loading) {
		return <HomePageLoading />;
	}

	if (hasError) {
		return <HomePageError onRetry={() => fetchList()} />;
	}

	return (
		<GestureHandlerRootView>
			<SafeAreaView style={styles.container}>
				<View style={styles.listWrapper}>
					<FlashList
						data={animeList}
						keyExtractor={(_, index) => index.toString()}
						onEndReached={() => {
							if (hasNextPage) fetchNextPage();
						}}
						estimatedItemSize={100}
						renderItem={({ item }) => <AnimeCard item={item} />}
						ListHeaderComponent={
							pickedFilter ? (
								<View style={styles.filterHeaderWrapper}>
									<Text style={styles.filterHeaderText}>Filter by genre: {pickedFilter.name}</Text>
								</View>
							) : null
						}
						ListFooterComponent={
							hasNextPage ? (
								<View style={styles.footerLoading}>
									<ActivityIndicator size="small" />
								</View>
							) : null
						}
					/>
				</View>
				<TouchableOpacity
					onPress={handleOpenSheet}
					style={[styles.fab, { backgroundColor: pickedFilter ? "#de1717ff" : "#6C47FF" }]}
					activeOpacity={0.8}
				>
					{pickedFilter ? (
						<MaterialIcons name="filter-alt-off" size={28} color="#fff" />
					) : (
						<MaterialIcons name="filter-alt" size={28} color="#fff" />
					)}
				</TouchableOpacity>
			</SafeAreaView>

			<BottomSheet
				ref={sheetRef}
				index={-1}
				snapPoints={snapPoints}
				enableDynamicSizing={false}
				enablePanDownToClose={true}
			>
				<View style={styles.contentContainer}>
					<View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
						<Text style={styles.sheetHeader}>Filter by Genre</Text>
					</View>
					<BottomSheetScrollView contentContainerStyle={styles.genreListContainer} showsVerticalScrollIndicator={false}>
						{genreList.map(genre => (
							<TouchableOpacity
								onPress={() => {
									handleCloseSheet();
									setPickedFilter(genre);
								}}
								key={genre.mal_id}
								style={styles.genreItem}
							>
								<Text style={styles.genreText}>{genre.name}</Text>
							</TouchableOpacity>
						))}
					</BottomSheetScrollView>
				</View>
			</BottomSheet>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	filterHeaderWrapper: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: "transparent",
	},
	filterHeaderText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	container: {
		flex: 1,
		backgroundColor: "#190C23",
	},
	contentContainer: {
		alignItems: "flex-start",
		paddingHorizontal: 20,
		paddingTop: 24,
		marginBottom: 60,
	},
	sheetHeader: {
		color: "#000000",
		fontWeight: "bold",
		fontSize: 20,
		marginBottom: 18,
	},
	genreListContainer: {
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 6,
	},
	genreItem: {
		backgroundColor: "#2D2336",
		borderRadius: 16,
		paddingHorizontal: 16,
		paddingVertical: 8,
		marginBottom: 10,
		marginRight: 10,
	},
	genreText: {
		color: "#fff",
		fontSize: 15,
		fontWeight: "500",
	},
	listWrapper: {
		flex: 1,
	},
	fab: {
		position: "absolute",
		right: 24,
		bottom: 20,
		width: 60,
		height: 60,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.18,
		shadowRadius: 8,
		elevation: 8,
	},
	closeButton: {
		padding: 8,
		borderRadius: 16,
	},
	footerLoading: {
		padding: 16,
		alignItems: "center",
	},
});
