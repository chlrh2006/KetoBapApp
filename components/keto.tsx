import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import RecipeModal from './modal/recipe';

export default function Keto() {
    const macros = { carb: 5, protein: 15, fat: 80 };
    const [isRecipeVisible, setIsRecipeVisible] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.screen}>
            <View style={styles.sectionWrap}>
                <Text style={styles.title}>GPT 맞춤 키토 식단</Text>
                <Text style={styles.subtitle}>당신의 선호도에 맞춰 GPT가 생성한 완벽한 키토 식단이에요</Text>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.headerBadge}>
                            <FontAwesome5 name="chart-line" size={25} color="#2563EB" />
                        </View>
                        <Text style={styles.cardTitle}>일일 영양 분석</Text>
                    </View>
                    <View style={styles.metricsRow}>
                        <View style={styles.metric}>
                            <Text style={styles.metricValue}>1241</Text>
                            <Text style={styles.metricLabel}>칼로리</Text>
                        </View>
                        <View style={styles.metricDivider} />
                        <View style={styles.metric}>
                            <Text style={styles.metricValue}>{macros.fat}%</Text>
                            <Text style={styles.metricLabel}>지방 비율</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardTitle}>영양소 비율</Text>
                        <Text style={styles.cardHelper}>키토 비율 유지 중</Text>
                    </View>
                    <View style={styles.ratioTrack}>
                        <View style={[styles.ratioSegment, { flex: macros.carb, backgroundColor: '#F59E0B' }]} />
                        <View style={[styles.ratioSegment, { flex: macros.protein, backgroundColor: '#2563EB' }]} />
                        <View style={[styles.ratioSegment, { flex: macros.fat, backgroundColor: '#10B981' }]} />
                    </View>
                    <View style={styles.legendRow}>
                        <View style={styles.legendItem}>
                            <View style={[styles.legendDot, { backgroundColor: '#F59E0B' }]} />
                            <Text style={styles.legendText}>탄수화물 {macros.carb}%</Text>
                        </View>
                        <View style={styles.legendItem}>
                            <View style={[styles.legendDot, { backgroundColor: '#2563EB' }]} />
                            <Text style={styles.legendText}>단백질 {macros.protein}%</Text>
                        </View>
                        <View style={styles.legendItem}>
                            <View style={[styles.legendDot, { backgroundColor: '#10B981' }]} />
                            <Text style={styles.legendText}>지방 {macros.fat}%</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.mealGrid}>
                    <View style={styles.mealCard}>
                        <View style={styles.mealHeader}>
                            <Text style={styles.mealLabel}>아침</Text>
                            <View style={styles.scorePill}><Text style={styles.scoreText}>키토 89점</Text></View>
                        </View>
                        <Text style={styles.mealTitle}>아보카도와 올리브오일 샐러드</Text>
                        <View style={styles.mealMetaRow}>
                            <Text style={styles.mealMeta}>326 칼로리</Text>
                            <Text style={styles.mealLink} onPress={() => setIsRecipeVisible(true)}>자세히 보기</Text>
                        </View>
                    </View>

                    <View style={styles.mealCard}>
                        <View style={styles.mealHeader}>
                            <Text style={styles.mealLabel}>점심</Text>
                            <View style={styles.scorePill}><Text style={styles.scoreText}>키토 99점</Text></View>
                        </View>
                        <Text style={styles.mealTitle}>연어와 아보카도 롤</Text>
                        <View style={styles.mealMetaRow}>
                            <Text style={styles.mealMeta}>325 칼로리</Text>
                            <Text style={styles.mealLink} onPress={() => setIsRecipeVisible(true)}>자세히 보기</Text>
                        </View>
                    </View>

                    <View style={styles.mealCard}>
                        <View style={styles.mealHeader}>
                            <Text style={styles.mealLabel}>저녁</Text>
                            <View style={styles.scorePill}><Text style={styles.scoreText}>키토 96점</Text></View>
                        </View>
                        <Text style={styles.mealTitle}>고기 없는 아보카도 스테이크</Text>
                        <View style={styles.mealMetaRow}>
                            <Text style={styles.mealMeta}>296 칼로리</Text>
                            <Text style={styles.mealLink} onPress={() => setIsRecipeVisible(true)}>자세히 보기</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>새로운 추천 받기 {'>'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>강남 키토 맛집 보기 {'>'}</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.helperText}>식단 유지가 어려우실 경우 강남 지역 내에 위치한 음식점에서 대안을 찾을 수 있습니다</Text>
            </View>
            <RecipeModal visible={isRecipeVisible} onClose={() => setIsRecipeVisible(false)} />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        paddingHorizontal: 20,
    },
    scrollContent: {
        paddingBottom: 24,
        paddingTop: 16,
    },
    sectionWrap: {
        width: '100%',
        paddingTop: 16,
    },
    title: {
        fontSize: 32,
        fontFamily: 'Pretendard-Bold',
        color: '#111827',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        color: '#6B7280',
        textAlign: 'center',
        marginTop: 6,
        marginBottom: 16,
        lineHeight: 22,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 14,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 2,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    headerBadge: {
        borderRadius: 8,
        backgroundColor: '#F3F4F6',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginRight: 10,
        padding: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontFamily: 'Pretendard-SemiBold',
        color: '#111827',
        flex: 1,
    },
    cardHelper: {
        fontSize: 14,
        fontFamily: 'Pretendard-SemiBold',
        color: '#2563EB',
    },
    metricsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    metric: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    metricDivider: {
        width: 1,
        height: 28,
        backgroundColor: '#BBB',
        marginHorizontal: 10,
    },
    metricValue: {
        fontSize: 24,
        fontFamily: 'Pretendard-Bold',
        color: '#111827',
        marginBottom: 2,
    },
    metricLabel: {
        fontSize: 12,
        color: '#6B7280',
        fontFamily: 'Pretendard-SemiBold',
    },
    ratioTrack: {
        height: 14,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#E5E7EB',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    ratioSegment: {
        height: '100%',
    },
    legendRow: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 6,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    legendDot: {
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    legendText: {
        fontSize: 13,
        color: '#374151',
        fontFamily: 'Pretendard-SemiBold',
    },
    mealGrid: {
        flexDirection: 'column',
        marginTop: 4,
        gap: 14,
    },
    mealCard: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 14,
        padding: 14,
        width: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 2,
    },
    mealHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    mealLabel: {
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        color: '#111827',
    },
    scorePill: {
        backgroundColor: '#F3F4F6',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    scoreText: {
        fontSize: 12,
        fontFamily: 'Pretendard-Bold',
        color: '#2563EB',
    },
    mealTitle: {
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        color: '#374151',
        marginBottom: 6,
    },
    mealMetaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mealMeta: {
        fontSize: 13,
        color: '#6B7280',
    },
    mealLink: {
        fontSize: 13,
        fontFamily: 'Pretendard-SemiBold',
        color: '#2563EB',
    },
    actions: {
        marginTop: 6,
        marginBottom: 10,
        gap: 10,
    },
    primaryButton: {
        marginTop: 10,
        backgroundColor: '#2563EB',
        borderRadius: 14,
        borderColor: '#2563EB',
        borderWidth: 1,
        paddingVertical: 14,
        paddingHorizontal: 18,
        alignSelf: 'stretch',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 8,
        elevation: 2,
    },
    primaryButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Pretendard-Bold',
        letterSpacing: 0.2,
    },
    secondaryButton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        borderColor: '#E5E7EB',
        borderWidth: 1,
        paddingVertical: 14,
        paddingHorizontal: 18,
        alignSelf: 'stretch',
    },
    secondaryButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#374151',
        fontFamily: 'Pretendard-SemiBold',
        letterSpacing: 0.2,
    },
    helperText: {
        fontSize: 13,
        color: '#6B7280',
        textAlign: 'center',
        marginTop: 8,
        lineHeight: 18,
    },
});