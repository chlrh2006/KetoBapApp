import React from "react";
import { View, StyleSheet, Pressable, Animated, Easing } from "react-native";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator, BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Like from "./components/like";
import Keto from "./components/keto";
import Main from "./components/main";
import Restaurant from "./components/restaurant";
import Mypage from "./components/mypage";

// 포커스 시 슬라이드 인 애니메이션 래퍼
function AnimatedScreen({ children }: { children: React.ReactNode }) {
  const isFocused = useIsFocused();
  const translateX = React.useRef(new Animated.Value(18)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isFocused) {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: 280,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 220,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      translateX.setValue(20);
      opacity.setValue(0);
    }
  }, [isFocused, opacity, translateX]);

  return (
    <Animated.View style={[styles.topContainer, { transform: [{ translateX }], opacity }]}> 
      {children}
    </Animated.View>
  );
}

// 각 화면을 애니메이션 래퍼로 감싸기
function LikeScreen() {
  return <AnimatedScreen><Like /></AnimatedScreen>;
}
function KetoScreen() {
  return <AnimatedScreen><Keto /></AnimatedScreen>;
}
function HomeScreen() {
  return <AnimatedScreen><Main /></AnimatedScreen>;
}
function RestaurantScreen() {
  return <AnimatedScreen><Restaurant /></AnimatedScreen>;
}
function MypageScreen() {
  return <AnimatedScreen><Mypage /></AnimatedScreen>;
}

const Tab = createBottomTabNavigator();
const RootNavigationContainer = NavigationContainer as unknown as React.ComponentType<{ children: React.ReactNode }>;

const TabBarButton = ({ onPress, onLongPress, accessibilityState, accessibilityRole, testID, children, style }: BottomTabBarButtonProps) => {
  const computedStyle = typeof (style as any) === 'function' ? (style as any)({ pressed: false }) : style;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      testID={testID}
      style={[computedStyle as any]}
      hitSlop={8}
      pressRetentionOffset={8}
    >
      {children}
    </Pressable>
  );
};

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
          tabBarButton: (props) => <TabBarButton {...props} />,
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
            height: 100,
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E5E7EB',
            borderTopWidth: 1,
          },
          tabBarLabelStyle: { display: 'none' },
          tabBarPressColor: 'transparent',
          tabBarPressOpacity: 1,
          tabBarItemStyle: {
            paddingBottom: 10,
          },
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
    zIndex: 0,
    elevation: 0,
    paddingTop: 35,
  },
});