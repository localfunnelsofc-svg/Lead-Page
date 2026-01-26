import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { BlurView } from 'expo-blur';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

// Wrapper for Glassmorphism
const GlassCard = ({ children, style, accentColor = COLORS.primaryBlue }: { children: React.ReactNode, style?: any, accentColor?: string }) => {
    return (
        <BlurView intensity={Platform.OS === 'web' ? 40 : 20} tint="dark" style={[styles.glassCard, style, { borderColor: accentColor + '40' }]}>
            {children}
        </BlurView>
    );
};

export const Services = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <View style={[styles.container, { paddingHorizontal: isMobile ? 20 : 40 }]}>
            <Text style={styles.sectionTitle}>Nossas Soluções</Text>

            <View style={[styles.cardsContainer, isMobile && { flexDirection: 'column' }]}>

                {/* Card 1: Tráfego Local */}
                <GlassCard style={styles.card}>
                    <View style={[styles.iconContainer, { backgroundColor: COLORS.primaryBlue + '20' }]}>
                        <MaterialIcons name="location-on" size={36} color={COLORS.primaryBlue} />
                    </View>
                    <Text style={styles.cardTitle}>Tráfego Local</Text>
                    <Text style={styles.cardDesc}>
                        Seja encontrado por clientes na sua região no momento exato em que eles procuram pelo seu serviço no Google e Redes Sociais.
                    </Text>
                    <TouchableOpacity>
                        <Text style={[styles.learnMore, { color: COLORS.primaryBlue }]}>Saiba mais →</Text>
                    </TouchableOpacity>
                </GlassCard>

                {/* Card 2: Tráfego Pago (NEW) */}
                <GlassCard style={styles.card} accentColor={COLORS.secondaryGold}>
                    <View style={[styles.iconContainer, { backgroundColor: COLORS.secondaryGold + '20' }]}>
                        <FontAwesome5 name="chart-line" size={32} color={COLORS.secondaryGold} />
                    </View>
                    <Text style={styles.cardTitle}>Tráfego Pago</Text>
                    <Text style={styles.cardDesc}>
                        Campanhas de alta performance no Facebook, Instagram e Google Ads focadas em ROI e escala previsível de faturamento.
                    </Text>
                    <TouchableOpacity>
                        <Text style={[styles.learnMore, { color: COLORS.secondaryGold }]}>Saiba mais →</Text>
                    </TouchableOpacity>
                </GlassCard>

                {/* Card 3: Desenvolvimento Web */}
                <GlassCard style={styles.card}>
                    <View style={[styles.iconContainer, { backgroundColor: COLORS.primaryBlue + '20' }]}>
                        <MaterialCommunityIcons name="monitor-shimmer" size={36} color={COLORS.primaryBlue} />
                    </View>
                    <Text style={styles.cardTitle}>Web Design</Text>
                    <Text style={styles.cardDesc}>
                        Sites modernos, velozes e otimizados para conversão. Transforme visitantes em leads qualificados com um design premium.
                    </Text>
                    <TouchableOpacity>
                        <Text style={[styles.learnMore, { color: COLORS.primaryBlue }]}>Saiba mais →</Text>
                    </TouchableOpacity>
                </GlassCard>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 100,
        backgroundColor: COLORS.deepNavy,
        alignItems: 'center',
        width: '100%', // ensure full width
    },
    sectionTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.softWhite,
        marginBottom: 80,
        letterSpacing: -1,
    },
    cardsContainer: {
        flexDirection: 'row',
        gap: 30,
        maxWidth: SIZES.containerMaxWidth,
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    glassCard: {
        flex: 1,
        minWidth: 320,
        borderRadius: 24,
        padding: 32,
        overflow: 'hidden',
        borderWidth: 1,
        ...Platform.select({
            web: {
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease',
            },
            default: {
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
            }
        }),
    },
    card: {
        backgroundColor: 'rgba(30, 41, 59, 0.4)', // Slightly darker fallback
    },
    iconContainer: {
        width: 64,
        height: 64,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.softWhite,
        marginBottom: 16,
    },
    cardDesc: {
        fontSize: 16,
        color: COLORS.mutedGray,
        lineHeight: 24,
        marginBottom: 24,
        minHeight: 72,
    },
    learnMore: {
        fontWeight: '600',
        fontSize: 16,
    }
});
