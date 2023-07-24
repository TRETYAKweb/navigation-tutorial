import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feed, Notifications, Settings, TweetDetailScreen } from "./screens";
import { Ionicons } from "@expo/vector-icons";

// Stack
const HomeStack = createNativeStackNavigator();

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailScreen}
        options={{
          presentation: "modal",
        }}
      />
    </HomeStack.Navigator>
  );
};

// Tab
const Tab = createBottomTabNavigator();

const TabGroup = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: ({ size, color, focused }) => {
          const route = useRoute().name;
          let iconName;
          if (route === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route === "Notifications") {
            iconName = focused
              ? "ios-notifications"
              : "ios-notifications-outline";
          } else if (route === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{ tabBarLabel: "TretyakBro" }}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeStackGroup />
    </NavigationContainer>
  );
};
