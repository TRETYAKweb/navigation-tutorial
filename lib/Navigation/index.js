import { useColorScheme, Pressable, View, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  Feed,
  Notifications,
  Settings,
  TweetDetailScreen,
  Payments,
} from "../../screens";
import { Ionicons } from "@expo/vector-icons";

// TopTabs
const TopTabs = createMaterialTopTabNavigator();

const TopTabsGroup = () => {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: "bold",
          textTransform: "capitalize",
        },
        tabBarIndicatorStyle: {
          height: 2,
          backgroundColor: "#1DA1F2",
        },
      }}
    >
      <TopTabs.Screen name="Main" component={Feed} />
      <TopTabs.Screen name="Following" component={Feed} />
      <TopTabs.Screen name="Trends" component={Feed} />
    </TopTabs.Navigator>
  );
};

// Drawer
const Drawer = createDrawerNavigator();

const DrawerGroup = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="HomeStackGroup"
        component={HomeStackGroup}
        options={{
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
};

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

const TabGroup = ({ navigation }) => {
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
        headerStyle: {
          height: 120,
        },
        headerLeft: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/beto.jpeg")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                  marginRight: 5,
                }}
              />

              <Text style={{ fontWeight: "600" }}>TretyakBro</Text>
            </View>
          </Pressable>
        ),
      }}
    >
      <Tab.Screen
        name="Feed"
        component={TopTabsGroup}
        options={{ tabBarLabel: "TretyakBro" }}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer
      theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar style="auto" />
      <DrawerGroup />
    </NavigationContainer>
  );
};
