import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Button, SafeAreaView, Text } from "react-native";

export const Payments = () => {
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerRight: () => {
        return (
          <Button title="Сontinue" onPress={() => nav.navigate("Settings")} />
        );
      },
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>Payments</Text>
    </SafeAreaView>
  );
};
