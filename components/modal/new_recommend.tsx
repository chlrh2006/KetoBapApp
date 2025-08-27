import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

interface NewRecommendProps {
    visible: boolean;
    onChangePreferences: () => void;
    onContinue: () => void;
    title?: string;
    description?: string;
    onCancel?: () => void;
}

export default function NewRecommend({
    visible,
    onChangePreferences,
    onContinue,
    onCancel,
    title = '선호도를 다시 설정하시겠어요?',
    description = '선호도 변경 버튼을 누르면 선호도 설정 페이지로 이동합니다.'
}: NewRecommendProps) {
    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={() => {}}>
            <View style={styles.backdrop}>
                <View style={styles.modal}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{description}</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={[styles.button, styles.primary]} onPress={onContinue}>
                            <Text style={styles.primaryText}>변경하지 않고 새로운 추천 받기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.secondary]} onPress={onChangePreferences}>
                            <Text style={styles.secondaryText}>선호도 변경</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancel} onPress={onCancel}>
                            <Text style={styles.cancelText}>취소</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modal: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 10,
        elevation: 3,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Pretendard-Bold',
        color: '#111827',
        marginBottom: 8,
        textAlign: 'left',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Pretendard-SemiBold',
        color: '#6B7280',
        lineHeight: 22,
        marginBottom: 12,
        textAlign: 'left',
    },
    actions: {
        marginTop: 8,
        gap: 10,
    },
    button: {
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 14,
        borderWidth: 1,
        alignSelf: 'stretch',
    },
    cancel: {
        paddingVertical: 12,
        alignSelf: 'stretch',
    },
    primary: {
        backgroundColor: '#2563EB',
        borderColor: '#2563EB',
    },
    secondary: {
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E7EB',
    },
    primaryText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Pretendard-Bold',
        letterSpacing: 0.2,
    },
    secondaryText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#374151',
        fontFamily: 'Pretendard-SemiBold',
        letterSpacing: 0.2,
    },
    cancelText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#6B7280',
        fontFamily: 'Pretendard-SemiBold',
    },
});