import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Mypage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>마이페이지</Text>
            <Text style={styles.subtitle}>내 선호/비선호/알레르기 설정을 관리하세요</Text>
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