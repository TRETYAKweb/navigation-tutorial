import { View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import TweetContent from "../../components/TweetContent";
import { useLayoutEffect } from "react";

export const TweetDetailScreen = () => {
  const { params } = useRoute();
  const navigate = useNavigation();

  useLayoutEffect(() => {
    navigate.setOptions({ headerTitle: params.tweet.author });
  }, []);

  return (
    <View testID="TweetDetailScreen" style={styles.container}>
      <TweetContent tweet={params.tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
