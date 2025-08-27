import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function Restaurant() {
    type RestaurantItem = {
        id: string;
        name: string;
        menu: string;
        scoreLabel: string;
        address: string;
        phone: string;
    };

    // 더미 데이터 20개 생성이라 length 20
    const restaurants: RestaurantItem[] = Array.from({ length: 20 }, (_, index) => ({
        id: `restaurant-${index}`,
        name: '남도예찬',
        menu: '한우안창살',
        scoreLabel: '키토 96점',
        address: '서울 서초구 서초대로 411 (GT타워)',
        phone: '02-3478-1014',
    }));

    const renderRestaurantCard = ({ item }: { item: RestaurantItem }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{item.menu}</Text>
                <View style={styles.scorePill}><Text style={styles.scoreText}>{item.scoreLabel}</Text></View>
            </View>
            <Text style={styles.menuText}>{item.name}</Text>

            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>위치</Text>
                <Text style={styles.infoValue}>{item.address}</Text>
            </View>
            <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>전화번호</Text>
                <Text style={styles.infoValue}>{item.phone}</Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>네이버에서 검색하기 {'>'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const ListHeader = () => (
        <View style={styles.sectionWrap}>
            <Text style={styles.title}>강남 키토 맛집</Text>
            <Text style={styles.subtitle}>키토 다이어트 중에도 걱정 없이 즐길 수 있는 강남 지역의 키토 친화적인 음식점과 메뉴를 추천해드려요</Text>
            <FlatList
                data={[1,2,3,4,5,6,7,8,9,10]}
                keyExtractor={(n) => `filter-${n}`}
                renderItem={({item}) => (
                    <View style={styles.chip}><Text style={styles.chipText}>{`필터 항목 ${item}`}</Text></View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.filtersRow}
            />
        </View>
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={restaurants}
                keyExtractor={(item) => item.id}
                renderItem={renderRestaurantCard}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.listContent}
                ListHeaderComponent={ListHeader}
                showsVerticalScrollIndicator={false}
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
        paddingTop: 16,
    },
    title: {
        fontSize: 32,
        fontFamily: 'Pretendard-Bold',
        color: '#111827',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Pretendard-SemiBold',
        color: '#6B7280',
        textAlign: 'center',
        marginBottom: 26,
        lineHeight: 22,
    },
    filtersRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 26,
    },
    chip: {
        backgroundColor: '#F3F4F6',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    chipText: {
        fontSize: 14,
        color: '#374151',
        fontFamily: 'Pretendard-SemiBold',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 14,
        padding: 16,
        marginBottom: 14,
        width: '48%',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 2,
    },
    listContent: {
        paddingTop: 16,
        paddingBottom: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    cardTitle: {
        fontSize: 20,
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
    menuText: {
        fontSize: 15,
        color: '#374151',
        fontFamily: 'Pretendard-SemiBold',
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    infoLabel: {
        fontSize: 14,
        color: '#6B7280',
        fontFamily: 'Pretendard-SemiBold',
        width: 80,
    },
    infoValue: {
        fontSize: 14,
        color: '#111827',
        fontFamily: 'Pretendard-SemiBold',
        flex: 1,
        textAlign: 'right',
    },
    actions: {
        marginTop: 12,
        gap: 10,
    },
    primaryButton: {
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
});