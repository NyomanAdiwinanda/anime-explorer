import React, { useRef, useMemo } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useAnime } from "@/providers/useAnime";
import AnimeListSkeleton from "@/components/AnimeListSkeleton";

export default function HomePageLoading() {
	const { pickedFilter } = useAnime();
	const sheetRef = useRef<BottomSheet>(null);
	const snapPoints = useMemo(() => ["92", "92%"], []);

	return (
		<GestureHandlerRootView>
			<SafeAreaView style={styles.container}>
				<AnimeListSkeleton />
				<TouchableOpacity
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
				<View style={styles.contentContainer} />
			</BottomSheet>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#190C23",
	},
	contentContainer: {
		flex: 1,
		alignItems: "flex-start",
		paddingHorizontal: 20,
		paddingTop: 24,
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
});
