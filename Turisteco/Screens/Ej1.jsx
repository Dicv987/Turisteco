import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

export default function Ej1() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className=" flex-1 bg-red-100 items-center justify-center">
      <Text className="text-5xl">TURISTECO 🌴</Text>
    </View>
  );
}
