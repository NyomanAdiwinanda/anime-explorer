import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons size={26} style={{ marginBottom: -3 }} color={color} name={focused ? "home" : "home-outline"} />
					),
				}}
			/>
			<Tabs.Screen
				name="favorite"
				options={{
					title: "Favorite",
					tabBarIcon: ({ color, focused }) => (
						<AntDesign size={26} style={{ marginBottom: -3 }} color={color} name={focused ? "heart" : "hearto"} />
					),
				}}
			/>
		</Tabs>
	);
}
