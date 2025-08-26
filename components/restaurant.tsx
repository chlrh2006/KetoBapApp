import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Restaurant() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>식당 추천 페이지</Text>
            <Text style={styles.subtitle}>키토 친화적인 맛집을 찾아보세요</Text>
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