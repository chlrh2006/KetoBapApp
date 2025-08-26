import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useRef, useEffect } from 'react';

type TabParamList = {
    Favorites: undefined;
    Food: undefined;
    Home: undefined;
    Restaurant: undefined;
    Mypage: undefined;
};

type NavigationProp = BottomTabNavigationProp<TabParamList>;

interface Notice4Props {
    currentPage: number;
}

export default function Notice4({ currentPage }: Notice4Props) {
    const navigation = useNavigation<NavigationProp>();
    const titleAnim = useRef(new Animated.Value(0)).current;
    const titleSlideAnim = useRef(new Animated.Value(-100)).current;
    const subtitleAnim = useRef(new Animated.Value(0)).current;
    const subtitleSlideAnim = useRef(new Animated.Value(-100)).current;
    const buttonAnim = useRef(new Animated.Value(0)).current;
    const buttonSlideAnim = useRef(new Animated.Value(-100)).current;
    const AnimatedView = Animated.View as unknown as React.ComponentType<any>;
    

    // currentPage가 3(notice4)일 때 애니메이션 시작
    useEffect(() => {
        if (currentPage === 3) {
            startSequentialAnimation();
        } else {
            resetAnimations();
        }
    }, [currentPage]);

    // 애니메이션 초기화 함수
    const resetAnimations = () => {
        titleAnim.setValue(0);
        titleSlideAnim.setValue(-10);
        subtitleAnim.setValue(0);
        subtitleSlideAnim.setValue(-10);
        buttonAnim.setValue(0);
        buttonSlideAnim.setValue(-10);
    };

    // 순차적 애니메이션 시작 함수
    const startSequentialAnimation = () => {
        resetAnimations();
        
        // 1. 제목 애니메이션 (0ms) - fade-in + slide-in
        Animated.parallel([
            Animated.timing(titleAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(titleSlideAnim, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            })
        ]).start();

        // 2. 부제목 애니메이션 (300ms 후) - fade-in + slide-in
        setTimeout(() => {
            Animated.parallel([
                Animated.timing(subtitleAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(subtitleSlideAnim, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                })
            ]).start();
        }, 300);

        // 3. 버튼 애니메이션 (600ms 후) - fade-in + slide-in
        setTimeout(() => {
            Animated.parallel([
                Animated.timing(buttonAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(buttonSlideAnim, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                })
            ]).start();
        }, 600);
    };

    return (
        <View style={styles.container}>
            <AnimatedView style={[
                styles.titleWrapper, 
                { 
                    opacity: titleAnim,
                    transform: [{ translateY: titleSlideAnim }]
                }
            ]}>
                <Image
                    source={require('../../assets/images/loading_rice_icon.png')}
                    style={styles.leftIcon}
                />
                <Image
                    source={require('../../assets/images/loading_avocado_icon.png')}
                    style={styles.rightIcon}
                />
                <Text style={styles.maintitle}><Text style={styles.highlight}>지금</Text> 바로 시작해보세요!</Text>
            </AnimatedView>
            <AnimatedView style={{ 
                opacity: subtitleAnim,
                transform: [{ translateY: subtitleSlideAnim }]
            }}>
                <Text style={styles.subtitle}>회원가입 없이 바로 사용 가능한 AI 키토 식단 추천</Text>
            </AnimatedView>

            <AnimatedView style={{ 
                opacity: buttonAnim,
                transform: [{ translateY: buttonSlideAnim }]
            }}>
                <TouchableOpacity
                    style={styles.first_button}
                    onPress={() => {
                        navigation.navigate('Favorites');
                    }}
                >
                    <Text style={styles.button_text}>
                        <Text style={styles.buttonPrimaryLabel}>식단 추천 받기</Text>
                        <Text style={styles.buttonPrimaryArrow}> {'>'}</Text>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.second_button}
                    onPress={() => {
                        navigation.navigate('Restaurant');
                    }}
                >
                    <Text style={styles.button_text}>
                        <Text style={styles.buttonSecondaryLabel}>강남 맛집 보기</Text>
                        <Text style={styles.buttonSecondaryArrow}> {'>'}</Text>
                    </Text>
                </TouchableOpacity>
            </AnimatedView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleWrapper: {
        position: 'relative',
        alignItems: 'center',
        width: '100%',
    },
    leftIcon: {
        position: 'absolute',
        left: -30,
        top: -50,
        width: 80,
        height: 80,
        opacity: 0.3,
        zIndex: -1,
        transform: [{ rotate: '-10deg' }],
    },
    rightIcon: {
        position: 'absolute',
        right: -30,
        top: -50,
        width: 80,
        height: 80,
        opacity: 0.3,
        zIndex: -1,
        transform: [{ rotate: '10deg' }],
    },
    maintitle: {
        fontSize: 36,
        fontFamily: 'Pretendard-Bold',
        textAlign: 'center',
        lineHeight: 46,
        marginBottom: 8,
        color: '#111827',
    },
    highlight: {
        color: '#2563EB',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        textAlign: 'center',
        color: '#6B7280',
        marginBottom: 36,
    },
    button_text: {
        fontSize: 22,
        fontFamily: 'Pretendard-SemiBold',
        textAlign: 'center',
    },
    buttonPrimaryLabel: {
        fontSize: 22,
        color: '#FFFFFF',
    },
    buttonPrimaryArrow: {
        color: '#D1D5DB',
    },
    buttonSecondaryLabel: {
        fontSize: 22,
        color: '#374151',
    },
    buttonSecondaryArrow: {
        fontSize: 22,
        color: '#9CA3AF',
    },
    first_button: {
        width: 260,
        backgroundColor: '#2563EB',
        borderRadius: 14,
        borderColor: '#2563EB',
        borderWidth: 1,
        paddingVertical: 14,
        paddingHorizontal: 18,
        marginBottom: 16,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 8,
        elevation: 2,
    },
    second_button: {
        width: 260,
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        borderColor: '#E5E7EB',
        borderWidth: 1,
        paddingVertical: 14,
        paddingHorizontal: 18,
        alignSelf: 'center',
    },
});