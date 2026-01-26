import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

export const Hero = () => {
    const { width } = useWindowDimensions();
    const isMobile = width < SIZES.mobileBreakpoint;

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[COLORS.gradientStart, COLORS.gradientEnd]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={StyleSheet.absoluteFillObject}
            />

            {/* Decorative Gradients */}
            <View style={styles.backgroundGlow} />

            <View style={[styles.content, { paddingHorizontal: isMobile ? 20 : 40, marginTop: isMobile ? -10 : -30 }]}>
                <View style={[styles.textContainer, isMobile && { alignItems: 'center' }]}>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>🚀 Acelere seu Negócio em 2026</Text>
                    </View>

                    <Text style={[styles.headline, { fontSize: isMobile ? 40 : 64, lineHeight: isMobile ? 48 : 76, textAlign: isMobile ? 'center' : 'left' }]}>
                        Transforme Cliques em <Text style={styles.highlight}>Vendas Reais.</Text>
                    </Text>

                    <Text style={[styles.subheadline, { fontSize: isMobile ? 18 : 20, lineHeight: isMobile ? 28 : 32, textAlign: isMobile ? 'center' : 'left' }]}>
                        Domine o Tráfego Pago e Local com estratégias validadas que colocam dinheiro no seu bolso, não apenas likes.
                    </Text>

                    <View style={[styles.buttonRow, isMobile && { flexDirection: 'column', width: '100%', gap: 16 }]}>
                        <TouchableOpacity style={styles.ctaButton}>
                            <Text style={styles.ctaText}>Quero Escalar Meu Faturamento</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.secondaryButton}>
                            <Text style={styles.secondaryText}>Ver Nossos Casos de Sucesso</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Abstract Geometry */}
                {!isMobile && (
                    <View style={styles.decorationContainer}>
                        <View style={[styles.circle, { width: 400, height: 400, borderColor: COLORS.primaryBlue, top: 0, right: 0 }]} />
                        <View style={[styles.circle, { width: 300, height: 300, borderColor: COLORS.secondaryGold, top: 100, right: 100 }]} />
                        <LinearGradient
                            colors={[COLORS.primaryBlue, 'transparent']}
                            style={styles.floatingGradient}
                        />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // @ts-ignore
        minHeight: '95vh',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
    },
    content: {
        maxWidth: SIZES.containerMaxWidth,
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 60,
        zIndex: 10,
    },
    textContainer: {
        flex: 1,
        maxWidth: 700,
    },
    badge: {
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.primaryBlue + '40',
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    badgeText: {
        color: COLORS.primaryBlue,
        fontWeight: '600',
        fontSize: 14,
    },
    headline: {
        color: COLORS.softWhite,
        fontWeight: '800',
        marginBottom: 24,
        letterSpacing: -2,
    },
    highlight: {
        color: COLORS.secondaryGold,
    },
    subheadline: {
        color: COLORS.mutedGray,
        marginBottom: 48,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 20,
    },
    ctaButton: {
        backgroundColor: COLORS.primaryBlue,
        paddingTop: 8,
        paddingBottom: 30,
        paddingHorizontal: 32,
        borderRadius: 16,
        shadowColor: COLORS.primaryBlue,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 24,
        elevation: 10,
        alignItems: 'center',
    },
    ctaText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    secondaryButton: {
        paddingTop: 8,
        paddingBottom: 30,
        paddingHorizontal: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.glassBorder,
        alignItems: 'center',
    },
    secondaryText: {
        color: COLORS.softWhite,
        fontSize: 16,
        fontWeight: '500',
    },
    decorationContainer: {
        position: 'absolute',
        right: -100,
        top: '15%',
        width: 600,
        height: 600,
        opacity: 0.8,
    },
    backgroundGlow: {
        position: 'absolute',
        top: -200,
        left: -200,
        width: 800,
        height: 800,
        borderRadius: 400,
        backgroundColor: COLORS.primaryBlue,
        opacity: 0.05,
        zIndex: 0,
    },
    circle: {
        position: 'absolute',
        borderWidth: 40,
        borderRadius: 999,
        opacity: 0.1,
    },
    floatingGradient: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 100,
        right: 200,
        top: 200,
        opacity: 0.2,
    }
});
