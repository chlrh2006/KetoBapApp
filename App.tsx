import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Like from "./components/like";
import Keto from "./components/keto";
import Main from "./components/main";
import Restaurant from "./components/restaurant";
import Mypage from "./components/mypage";

// 각 화면을 TopContainer 스타일로 감싸기
function LikeScreen() {
  return <View style={styles.topContainer}><Like /></View>;
}
function KetoScreen() {
  return <View style={styles.topContainer}><Keto /></View>;
}
function HomeScreen() {
  return <View style={styles.topContainer}><Main /></View>;
}
function RestaurantScreen() {
  return <View style={styles.topContainer}><Restaurant /></View>;
}
function MypageScreen() {
  return <View style={styles.topContainer}><Mypage /></View>;
}

const Tab = createBottomTabNavigator();
const RootNavigationContainer = NavigationContainer as unknown as React.ComponentType<{ children: React.ReactNode }>; 

export default function App() {
  const [fontsLoaded] = useFonts({
    'Pretendard': require('./assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-Bold': require('./assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-SemiBold': require('./assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Medium': require('./assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-Light': require('./assets/fonts/Pretendard-Light.otf'),
    'Pretendard-ExtraLight': require('./assets/fonts/Pretendard-ExtraLight.otf'),
    'Pretendard-ExtraBold': require('./assets/fonts/Pretendard-ExtraBold.otf'),
    'Pretendard-Black': require('./assets/fonts/Pretendard-Black.otf'),
    'Pretendard-Thin': require('./assets/fonts/Pretendard-Thin.otf'),
  });

  if (!fontsLoaded) return null;

  return (
    <RootNavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Favorites') iconName = 'heart';
            else if (route.name === 'Food') iconName = 'drumstick-bite';
            else if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Restaurant') iconName = 'utensils';
            else if (route.name === 'Mypage') iconName = 'user';

            return <FontAwesome5 name={iconName} size={focused ? 25 : 20} color={color} solid />;
          },
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarStyle: {
            height: 90,
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E5E7EB',
            borderTopWidth: 1,
          },
          tabBarLabelStyle: { display: 'none' },
          tabBarPressColor: 'transparent',
          tabBarPressOpacity: 1,
        })}
      >

        <Tab.Screen name="Favorites" component={LikeScreen} />
        <Tab.Screen name="Food" component={KetoScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Restaurant" component={RestaurantScreen} />
        <Tab.Screen name="Mypage" component={MypageScreen} />
      </Tab.Navigator>
    </RootNavigationContainer>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FA',
  },
});