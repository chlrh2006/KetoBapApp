import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Keto() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>식단 추천 페이지</Text>
            <Text style={styles.subtitle}>당신만의 맞춤 키토 식단을 받아보세요</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F8FA',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontFamily: 'Pretendard-Bold',
        color: '#111827',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        color: '#6B7280',
        lineHeight: 22,
        textAlign: 'center',
    },
});