import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ConfirmModalProps {
    visible: boolean;
    title: string;
    message?: string;
    cancelText?: string;
    confirmText?: string;
    onCancel: () => void;
    onConfirm: () => void;
}

export default function ConfirmModal({ visible, title, message, cancelText = '취소', confirmText = '확인', onCancel, onConfirm }: ConfirmModalProps) {
    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={() => {}}>
            <View style={styles.confirmBackdrop}>
                <View style={styles.confirmModal}>
                    <Text style={styles.confirmTitle}>{title}</Text>
                    {message ? <Text style={styles.confirmText}>{message}</Text> : null}
                    <View style={styles.confirmRow}>
                        <TouchableOpacity style={[styles.confirmBtn, styles.confirmCancel]} onPress={onCancel}>
                            <Text style={styles.confirmCancelText}>{cancelText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.confirmBtn, styles.confirmConfirm]} onPress={onConfirm}>
                            <Text style={styles.confirmConfirmText}>{confirmText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    confirmBackdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    confirmModal: {
        width: '100%',
        maxWidth: 360,
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
    confirmTitle: {
        fontSize: 20,
        color: '#111827',
        fontFamily: 'Pretendard-Bold',
        marginBottom: 8,
        textAlign: 'left',
    },
    confirmText: {
        fontSize: 14,
        color: '#6B7280',
        textAlign: 'left',
    },
    confirmRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        marginTop: 16,
    },
    confirmBtn: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        borderWidth: 1,
    },
    confirmCancel: {
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E7EB',
    },
    confirmConfirm: {
        backgroundColor: '#2563EB',
        borderColor: '#2563EB',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 2,
    },
    confirmCancelText: {
        color: '#374151',
        fontFamily: 'Pretendard-SemiBold',
        fontSize: 14,
    },
    confirmConfirmText: {
        color: '#FFFFFF',
        fontFamily: 'Pretendard-Bold',
        fontSize: 14,
    },
});


