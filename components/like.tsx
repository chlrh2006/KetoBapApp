import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Recommend from './modal/recommend';

// 선택된 음식 값에 이모지 라벨을 매핑
const FOOD_LABELS: Record<string, string> = {
    '아보카도': '🥑 아보카도',
    '연어': '🐟 연어',
    '치즈': '🧀 치즈',
    '계란': '🥚 계란',
    '견과류': '🥜 견과류',
    '올리브오일': '🧴 올리브오일',
    '닭가슴살': '🐔 닭가슴살',
    '브로콜리': '🥦 브로콜리',
    '시금치': '🌿 시금치',
    '버터': '🧈 버터',
    '베이컨': '🥓 베이컨',
    '새우': '🦐 새우',
    '토마토': '🍅 토마토',
    '양상추': '🥬 양상추',
    '오이': '🥒 오이',
    '기타': '➕ 기타',
    '유제품': '🥛 유제품',
    '해산물': '🦐 해산물',
    '콩': '🌱 콩류',
    '글루텐': '🌾 글루텐',
};

export default function Like() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState<'preferred' | 'disliked' | 'allergy' | null>(null);
    const [preferredFoods, setPreferredFoods] = useState<string[]>([]);
    const [dislikedFoods, setDislikedFoods] = useState<string[]>([]);
    const [allergyFoods, setAllergyFoods] = useState<string[]>([]);

    return (
        <View style={styles.screen}>
            <Text style={styles.maintitle}>맞춤 식단을 위한 선호도 설정</Text>
            <Text style={styles.subtitle}>당신의 취향에 맞는 완벽한 키토 식단을 추천해드릴게요</Text>

            <View style={styles.sectionWrap}>
                <View style={styles.element}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome5 name="heart" size={30} color="#A4E6A4" solid />
                        <Text style={styles.elementtitle}>선호하는 음식</Text>
                    </View>
                    {/* 이 버튼을 누르면 모달 출력 */}
                    <TouchableOpacity style={styles.elementModalButton} onPress={() => { setActiveCategory('preferred'); setIsModalVisible(true); }}>
                        {preferredFoods.slice(0, 2).map((food) => (
                            <View style={styles.chip} key={`pf-${food}`}>
                                <Text style={styles.chipText}>{FOOD_LABELS[food] || food}</Text>
                            </View>
                        ))}
                        {preferredFoods.length > 2 && (
                            <View style={styles.chipSummary}>
                                <Text style={styles.chipSummaryText}>{`+${preferredFoods.length - 2}`}</Text>
                            </View>
                        )}
                        <View style={styles.elementModalAdd}>
                            <FontAwesome5 name="plus" size={14} color="#597358" />
                            <Text style={styles.elementModalButtonText}>추가</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.element}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome5 name="times" size={35} color="#E07285" />
                        <Text style={styles.elementtitle}>비선호하는 음식</Text>
                    </View>
                    <TouchableOpacity style={styles.elementModalButton} onPress={() => { setActiveCategory('disliked'); setIsModalVisible(true); }}>
                        {dislikedFoods.slice(0, 2).map((food) => (
                            <View style={styles.chip} key={`df-${food}`}>
                                <Text style={styles.chipText}>{FOOD_LABELS[food] || food}</Text>
                            </View>
                        ))}
                        {dislikedFoods.length > 2 && (
                            <View style={styles.chipSummary}>
                                <Text style={styles.chipSummaryText}>{`+${dislikedFoods.length - 2}`}</Text>
                            </View>
                        )}
                        <View style={styles.elementModalAdd}>
                            <FontAwesome5 name="plus" size={14} color="#597358" />
                            <Text style={styles.elementModalButtonText}>추가</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.element}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome5 name="exclamation-triangle" size={25} color="#FFDC85" />
                        <Text style={styles.elementtitle}>알레르기 정보</Text>
                    </View>
                    <TouchableOpacity style={styles.elementModalButton} onPress={() => { setActiveCategory('allergy'); setIsModalVisible(true); }}>
                        {allergyFoods.slice(0, 2).map((food) => (
                            <View style={styles.chip} key={`af-${food}`}>
                                <Text style={styles.chipText}>{FOOD_LABELS[food] || food}</Text>
                            </View>
                        ))}
                        {allergyFoods.length > 2 && (
                            <View style={styles.chipSummary}>
                                <Text style={styles.chipSummaryText}>{`+${allergyFoods.length - 2}`}</Text>
                            </View>
                        )}
                        <View style={styles.elementModalAdd}>
                            <FontAwesome5 name="plus" size={14} color="#597358" />
                            <Text style={styles.elementModalButtonText}>추가</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.button}>
                <Text style={styles.buttontext}>GPT 식단 추천 받기 {'>'}</Text>
            </View>

            <Text style={styles.infoText}>설정은 언제든지 변경할 수 있습니다</Text>

            <Recommend
                visible={isModalVisible}
                onClose={() => { setIsModalVisible(false); setActiveCategory(null); }}
                initialSelected={
                    activeCategory === 'preferred' ? preferredFoods :
                    activeCategory === 'disliked' ? dislikedFoods :
                    activeCategory === 'allergy' ? allergyFoods : []
                }
                title={
                    activeCategory === 'preferred' ? '선호하는 음식을 선택해주세요' :
                    activeCategory === 'disliked' ? '비선호하는 음식을 선택해주세요' :
                    activeCategory === 'allergy' ? '알레르기 음식을 선택해주세요' : undefined
                }
                category={activeCategory || undefined}
                onSave={(foods) => {
                    if (activeCategory === 'preferred') setPreferredFoods(foods);
                    if (activeCategory === 'disliked') setDislikedFoods(foods);
                    if (activeCategory === 'allergy') setAllergyFoods(foods);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        paddingHorizontal: 20,
    },
    sectionWrap: {
        width: '100%',
    },
    maintitle: {
        fontSize: 32,
        fontFamily: 'Pretendard-Bold',
        textAlign: 'center',
        lineHeight: 42,
        marginBottom: 8,
        color: '#111827',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        textAlign: 'center',
        lineHeight: 24,
        color: '#6B7280',
        marginBottom: 20,
    },
    element: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        width: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 2,
    },
    elementtitle: {
        fontSize: 18,
        fontFamily: 'Pretendard-SemiBold',
        color: '#111827',
    },
    elementModalButton: {
        backgroundColor: '#F3F4F6',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap',
    },
    elementModalAdd: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    elementModalButtonText: {
        color: '#374151',
        fontSize: 14,
        fontFamily: 'Pretendard-SemiBold',
    },
    chipsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 10,
    },
    chip: {
        backgroundColor: '#F3F4F6',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    chipSummary: {
        backgroundColor: '#111827',
        borderColor: '#111827',
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    chipSummaryText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Pretendard-Bold',
    },
    chipText: {
        color: '#374151',
        fontSize: 14,
    },
    moreLink: {
        color: '#2563EB',
        textDecorationLine: 'underline',
        alignSelf: 'flex-start',
        marginTop: 8,
        fontFamily: 'Pretendard-SemiBold',
    },
    button: {
        backgroundColor: '#2563EB',
        borderRadius: 14,
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignSelf: 'stretch',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 8,
        elevation: 2,
    },
    buttontext: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Pretendard-Bold',
        letterSpacing: 0.2,
    },
    infoText: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        marginTop: 16,
    },
})