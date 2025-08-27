import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';

interface RecipeModalProps {
    visible: boolean;
    onClose: () => void;
}

export default function RecipeModal({ visible, onClose }: RecipeModalProps) {
    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={() => {}}>
            <View style={styles.backdrop}>
                <View style={styles.modal}>
                    <Text style={styles.title}>레시피</Text>
                    <Text style={styles.text}>예시 레시피 상세 내용을 여기에 표시합니다.</Text>
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
    },
    modal: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    title: {
        fontSize: 20,
        fontFamily: 'Pretendard-Bold',
        color: '#111827',
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        color: '#374151',
        fontFamily: 'Pretendard-SemiBold',
    },
});