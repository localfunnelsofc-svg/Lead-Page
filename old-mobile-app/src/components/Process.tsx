import React from 'react';
import { View, Text, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const StepCard = ({ number, title, description }: { number: string, title: string, description: string }) => {
    return (
        <View style={styles.stepCard}>
            <View style={styles.numberContainer}>
                <Text style={styles.numberText}>{number}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.stepTitle}>{title}</Text>
                <Text style={styles.stepDesc}>{description}</Text>
            </View>
        </View>
    );
};

export const Process = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <View style={[styles.container, { paddingHorizontal: isMobile ? 20 : 40 }]}>
            <Text style={styles.sectionTitle}>Como Funciona</Text>
            <Text style={styles.subTitle}>Nossa metodologia comprovada para escalar seus resultados.</Text>

            <View style={[styles.stepsGrid, isMobile && { flexDirection: 'column' }]}>
                <StepCard
                    number="01"
                    title="Análise Profunda"
                    description="Estudamos seu mercado, concorrentes e público-alvo para criar uma estratégia personalizada."
                />
                <View style={[styles.connector, isMobile && { height: 40, width: 2, marginVertical: 10 }]} />
                <StepCard
                    number="02"
                    title="Estruturação"
                    description="Criamos Landing Pages de alta conversão e configuramos suas campanhas de Tráfego Pago."
                />
                <View style={[styles.connector, isMobile && { height: 40, width: 2, marginVertical: 10 }]} />
                <StepCard
                    number="03"
                    title="Otimização Contínua"
                    description="Monitoramos métricas diariamente e ajustamos as campanhas para maximizar seu ROI."
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: SIZES.spacing.xl,
        backgroundColor: COLORS.deepNavy,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: COLORS.glassBorder,
    },
    sectionTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: COLORS.softWhite,
        marginBottom: 16,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 18,
        color: COLORS.mutedGray,
        marginBottom: 60,
        textAlign: 'center',
        maxWidth: 600,
    },
    stepsGrid: {
        flexDirection: 'row',
        maxWidth: SIZES.containerMaxWidth,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepCard: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
        minWidth: 250,
    },
    numberContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderWidth: 1,
        borderColor: COLORS.primaryBlue,
    },
    numberText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.primaryBlue,
    },
    textContainer: {
        alignItems: 'center',
    },
    stepTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.softWhite,
        marginBottom: 12,
        textAlign: 'center',
    },
    stepDesc: {
        fontSize: 16,
        color: COLORS.mutedGray,
        textAlign: 'center',
        lineHeight: 24,
    },
    connector: {
        width: 60,
        height: 2,
        backgroundColor: COLORS.glassBorder,
        alignSelf: 'center',
        // On mobile this would be adjusted inline
    }
});
