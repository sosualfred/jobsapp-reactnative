import { View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function Details() {
  const router = useRouter();
  return (
    <View>
      <Stack.Screen options={{ title: "Details" }} />
      <Text
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          router.back();
        }}
      >
        Details Screen
      </Text>
    </View>
  );
}
