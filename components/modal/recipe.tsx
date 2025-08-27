import React from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface RecipeModalProps {
    visible: boolean;
    onClose: () => void;
}

export default function RecipeModal({ visible, onClose }: RecipeModalProps) {
    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={() => {}}>
            <View style={styles.backdrop}>
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}><Text style={{color: '#2563EB'}}>아보카도 크림 치즈 볼</Text> 레시피</Text>
                    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="nutrition-outline" size={20} color="#6B7280" />
                            <Text style={styles.sectionTitle}>영양 성분</Text>
                        </View>
                        <View style={styles.statsGrid}>
                            <View style={styles.statCard}>
                                <View style={styles.statIconRow}>
                                    <Ionicons name="flame-outline" size={16} color="#6B7280" />
                                    <Text style={styles.statLabel}>칼로리</Text>
                                </View>
                                <Text style={styles.statValue}>320kcal</Text>
                            </View>
                            <View style={styles.statCard}>
                                <View style={styles.statIconRow}>
                                    <Ionicons name="cube-outline" size={16} color="#6B7280" />
                                    <Text style={styles.statLabel}>탄수화물</Text>
                                </View>
                                <Text style={styles.statValue}>5g</Text>
                            </View>
                            <View style={styles.statCard}>
                                <View style={styles.statIconRow}>
                                    <Ionicons name="barbell-outline" size={16} color="#6B7280" />
                                    <Text style={styles.statLabel}>단백질</Text>
                                </View>
                                <Text style={styles.statValue}>12g</Text>
                            </View>
                            <View style={styles.statCard}>
                                <View style={styles.statIconRow}>
                                    <Ionicons name="water-outline" size={16} color="#6B7280" />
                                    <Text style={styles.statLabel}>지방</Text>
                                </View>
                                <Text style={styles.statValue}>28g</Text>
                            </View>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.sectionHeader}>
                            <Ionicons name="leaf-outline" size={20} color="#6B7280" />
                            <Text style={styles.sectionTitle}>재료</Text>
                        </View>
                        <View style={styles.chipsRow}>
                            <View style={styles.chip}><Text style={styles.chipText}>아보카도</Text></View>
                            <View style={styles.chip}><Text style={styles.chipText}>크림 치즈</Text></View>
                            <View style={styles.chip}><Text style={styles.chipText}>올리브오일</Text></View>
                            <View style={styles.chip}><Text style={styles.chipText}>호두</Text></View>
                            <View style={styles.chip}><Text style={styles.chipText}>스피나치</Text></View>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.sectionHeader}>
                            <Ionicons name="restaurant-outline" size={20} color="#6B7280" />
                            <Text style={styles.sectionTitle}>조리법</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            아보카도를 반으로 잘라 크림 치즈와 올리브오일을 섞어 속을 채운 후,
                            호두와 스피나치를 곁들여 서빙합니다.
                        </Text>
                    </ScrollView>

                    <TouchableOpacity style={styles.primaryButton} onPress={onClose}>
                        <Text style={styles.primaryButtonText}>닫기</Text>
                    </TouchableOpacity>
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
        maxHeight: '85%',
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: 'Pretendard-Bold',
        color: '#111827',
    },
    scroll: {
        marginTop: 12,
    },
    scrollContent: {
        paddingBottom: 8,
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: 'Pretendard-Bold',
        color: '#111827',
        marginTop: 4,
        lineHeight: 22,
        includeFontPadding: false,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 14,
    },
    chipsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    chip: {
        backgroundColor: '#F3F4F6',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    chipText: {
        color: '#374151',
        fontSize: 14,
        fontFamily: 'Pretendard-SemiBold',
        includeFontPadding: false,
        lineHeight: 18,
    },
    divider: {
        height: 1,
        backgroundColor: '#E5E7EB',
        marginVertical: 12,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    statCard: {
        flexGrow: 1,
        minWidth: '48%',
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    statIconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 6,
    },
    statLabel: {
        fontSize: 12,
        color: '#6B7280',
        fontFamily: 'Pretendard-SemiBold',
        includeFontPadding: false,
        lineHeight: 16,
    },
    statValue: {
        fontSize: 16,
        color: '#111827',
        fontFamily: 'Pretendard-Bold',
        includeFontPadding: false,
        lineHeight: 20,
    },
    list: {
        gap: 6,
    },
    listItem: {
        fontSize: 14,
        color: '#374151',
        fontFamily: 'Pretendard-SemiBold',
        includeFontPadding: false,
        lineHeight: 18,
    },
    text: {
        fontSize: 14,
        color: '#374151',
        fontFamily: 'Pretendard-SemiBold',
    },
    paragraph: {
        fontSize: 14,
        color: '#374151',
        lineHeight: 22,
        fontFamily: 'Pretendard-SemiBold',
    },
    primaryButton: {
        backgroundColor: '#2563EB',
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignSelf: 'stretch',
        marginTop: 12,
    },
    primaryButtonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Pretendard-Bold',
        letterSpacing: 0.2,
    },
});