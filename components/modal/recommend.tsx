import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable, TouchableOpacity, ScrollView, TextInput } from 'react-native';

interface RecommendProps {
    visible: boolean;
    onClose: () => void;
    initialSelected: string[];
    onSave: (foods: string[]) => void;
    title?: string;
    category?: 'preferred' | 'disliked' | 'allergy';
}

const FOOD_OPTIONS = [
    // 키토 친화적 음식
    { value: '아보카도', label: '🥑 아보카도' },
    { value: '연어', label: '🐟 연어' },
    { value: '치즈', label: '🧀 치즈' },
    { value: '계란', label: '🥚 계란' },
    { value: '견과류', label: '🥜 견과류' },
    { value: '올리브오일', label: '🧴 올리브오일' },
    { value: '닭가슴살', label: '🐔 닭가슴살' },
    { value: '브로콜리', label: '🥦 브로콜리' },
    { value: '시금치', label: '🌿 시금치' },
    { value: '버터', label: '🧈 버터' },
    { value: '베이컨', label: '🥓 베이컨' },
    { value: '새우', label: '🦐 새우' },
    // 기타 음식
    { value: '토마토', label: '🍅 토마토' },
    { value: '양상추', label: '🥬 양상추' },
    { value: '오이', label: '🥒 오이' },
    { value: '기타', label: '➕ 기타 (직접 입력)' },
]

const ALLERGY_OPTIONS = [
    { value: '견과류', label: '🥜 견과류' },
    { value: '유제품', label: '🥛 유제품' },
    { value: '해산물', label: '🦐 해산물' },
    { value: '계란', label: '🥚 계란' },
    { value: '콩', label: '🌱 콩류' },
    { value: '글루텐', label: '🌾 글루텐' },
    { value: '기타', label: '➕ 기타 (직접 입력)' },
]

export default function Recommend({ visible, onClose, initialSelected, onSave, title, category }: RecommendProps) {
    const [selectedFoods, setSelectedFoods] = useState<string[]>(initialSelected || []);
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [customText, setCustomText] = useState('');

    useEffect(() => {
        if (visible) {
            setSelectedFoods(initialSelected || []);
        }
    }, [visible, initialSelected]);

    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
            <Pressable style={styles.modalBackground} onPress={onClose}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <ScrollView style={styles.modalScroll} contentContainerStyle={styles.modalScrollContent}>
                        {/* 선택된 음식들 */}
                        {/* 만약 선택된 음식이 없는 경우 '선택된 음식이 없습니다' 텍스트 표시 */}
                        <View style={styles.modalContentSelected}>
                            {selectedFoods.length === 0 ? (
                                <Text style={styles.modalEmptyText}>선택된 음식이 없습니다.</Text>
                            ) : (
                                selectedFoods.map((food) => {
                                    const label = [...FOOD_OPTIONS, ...ALLERGY_OPTIONS].find((o) => o.value === food)?.label || food;
                                    return (
                                        <View style={styles.modalContentListElement} key={food}>
                                            <Text style={styles.itemLabel}>{label}</Text>
                                        </View>
                                    );
                                })
                            )}
                        </View>
                        <View style={styles.modalContentList}>
                            {(category === 'allergy' ? ALLERGY_OPTIONS : FOOD_OPTIONS).map((option) => (
                                <Pressable
                                    style={[
                                        styles.modalContentListElement,
                                        selectedFoods.includes(option.value) && styles.modalContentListElementSelected
                                    ]}
                                    key={option.value}
                                    onPress={() => {
                                        if (option.value === '기타') {
                                            setShowCustomInput(true);
                                            return;
                                        }
                                        if (selectedFoods.includes(option.value)) {
                                            setSelectedFoods(selectedFoods.filter((food) => food !== option.value));
                                        } else {
                                            setSelectedFoods([...selectedFoods, option.value]);
                                        }
                                    }}
                                >
                                    <Text style={styles.optionLabel}>{option.label}</Text>
                                </Pressable>
                            ))}
                        </View>
                        {showCustomInput && (
                            <View style={styles.customRow}>
                                <TextInput
                                    style={styles.customInput}
                                    placeholder="직접 입력"
                                    placeholderTextColor="#9CA3AF"
                                    value={customText}
                                    onChangeText={setCustomText}
                                />
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.modalConfirm]}
                                    onPress={() => {
                                        const value = customText.trim();
                                        if (value.length === 0) return;
                                        if (!selectedFoods.includes(value)) {
                                            setSelectedFoods([...selectedFoods, value]);
                                        }
                                        setCustomText('');
                                        setShowCustomInput(false);
                                    }}
                                >
                                    <Text style={styles.modalConfirmText}>추가</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.modalCancel]}
                                    onPress={() => { setShowCustomInput(false); setCustomText(''); }}
                                >
                                    <Text style={styles.modalCancelText}>취소</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </ScrollView>
                    <View style={styles.modalActions}>
                        <TouchableOpacity style={[styles.modalButton, styles.modalReset]} onPress={() => { setSelectedFoods([]); }}>
                            <Text style={styles.modalResetText}>초기화</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.modalButton, styles.modalCancel]} onPress={onClose}>
                            <Text style={styles.modalCancelText}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.modalButton, styles.modalConfirm]} onPress={() => { onSave(selectedFoods); onClose(); }}>
                            <Text style={styles.modalConfirmText}>저장</Text>
                        </TouchableOpacity>
                    </View>
        </View>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        maxHeight: '80%',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 10,
        elevation: 3,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827',
    },
    modalScroll: {
        marginTop: 12,
    },
    modalScrollContent: {
        paddingBottom: 8,
    },
    modalContentList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
    },
    modalContentListElement: {
        backgroundColor: '#F9FAFB',
        borderRadius: 10,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        margin: 3,
    },
    modalContentListElementSelected: {
        backgroundColor: '#EEF6FF',
        borderColor: '#93C5FD',
        borderWidth: 1,
    },
    itemLabel: {
        fontSize: 14,
        color: '#6B7280',
    },
    optionLabel: {
        fontSize: 14,
        color: '#6B7280',
    },
    modalContentSelected: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 10,
        borderStyle: 'dashed',
        padding: 8,
        backgroundColor: '#F9FAFB',
    },
    modalEmptyText: {
        color: '#888888',
        fontSize: 16,
        margin: 15,
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        marginTop: 16,
    },
    customRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 12,
    },
    customInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        color: '#111827',
    },
    modalButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        borderWidth: 1,
    },
    modalReset: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FCA5A5',
    },
    modalCancel: {
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E7EB',
    },
    modalConfirm: {
        backgroundColor: '#2563EB',
        borderColor: '#2563EB',
    },
    modalResetText: {
        color: '#EF4444',
        fontFamily: 'Pretendard-Bold',
        fontSize: 14,
    },
    modalCancelText: {
        color: '#6B7280',
        fontFamily: 'Pretendard-Bold',
        fontSize: 14,
    },
    modalConfirmText: {
        color: '#FFFFFF',
        fontFamily: 'Pretendard-Bold',
        fontSize: 14,
    },
})