import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, Pressable, Linking, Alert } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

// Moved outside to prevent re-creation on render (fixes focus loss bug)
const InputField = ({ placeholder, icon, multiline = false, value, onChangeText, focusedInput, setFocusedInput }: any) => (
    <View style={[
        styles.inputContainer,
        focusedInput === placeholder && styles.inputFocused
    ]}>
        <MaterialCommunityIcons name={icon} size={20} color={focusedInput === placeholder ? COLORS.primaryBlue : COLORS.mutedGray} style={{ marginRight: 12 }} />
        <TextInput
            style={[styles.input, multiline && { height: 80, textAlignVertical: 'top' }]}
            placeholder={placeholder}
            placeholderTextColor={COLORS.mutedGray}
            onFocus={() => setFocusedInput(placeholder)}
            onBlur={() => setFocusedInput(null)}
            multiline={multiline}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
);

export const Footer = ({ isMobile }: { isMobile: boolean }) => {
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [site, setSite] = useState('');
    const [challenge, setChallenge] = useState('');
    const [focusedInput, setFocusedInput] = useState<string | null>(null);

    const handleWhatsAppSubmit = () => {
        if (!name || !whatsapp) {
            if (Platform.OS === 'web') {
                alert('Por favor, preencha pelo menos seu Nome e WhatsApp.');
            } else {
                Alert.alert('Erro', 'Por favor, preencha pelo menos seu Nome e WhatsApp.');
            }
            return;
        }

        const message = `🚀 *NOVA SOLICITAÇÃO DE CONSULTORIA*\n\n` +
            `*Nome:* ${name}\n` +
            `*WhatsApp:* ${whatsapp}\n` +
            `*Site:* ${site || 'Não informado'}\n` +
            `*Maior Desafio:* ${challenge || 'Não informado'}\n\n` +
            `--------------------------------\n` +
            `Vim pela Landing Page e quero meu plano de ação!`;

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = '5511975760654';
        const link = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        Linking.openURL(link);
    };

    return (
        <View style={styles.container} accessibilityRole={"contentinfo" as any}>

            {/* CTA Section - Separated from Footer Links */}
            <View style={styles.ctaSection}>
                <View style={[styles.content, { paddingHorizontal: isMobile ? 20 : 40, flexDirection: isMobile ? 'column' : 'row' }]}>

                    {/* Text Column */}
                    <View style={[styles.textColumn, isMobile && { marginBottom: 40 }]}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>VAGAS LIMITADAS PARA CONSULTORIA</Text>
                        </View>
                        <Text style={styles.ctaTitle}>
                            Pronto para <Text style={{ color: COLORS.secondaryGold }}>Dobrar seu Faturamento?</Text>
                        </Text>
                        <Text style={styles.ctaDesc}>
                            Preencha o formulário e receba um **Plano de Ação Personalizado** gratuito para o seu negócio.
                        </Text>

                        {!isMobile && (
                            <View style={styles.benefitsList}>
                                <View style={styles.benefitItem}>
                                    <MaterialCommunityIcons name="check-circle" size={20} color={COLORS.primaryBlue} />
                                    <Text style={styles.benefitText}>Análise de Concorrentes</Text>
                                </View>
                                <View style={styles.benefitItem}>
                                    <MaterialCommunityIcons name="check-circle" size={20} color={COLORS.primaryBlue} />
                                    <Text style={styles.benefitText}>Estratégia de Tráfego</Text>
                                </View>
                                <View style={styles.benefitItem}>
                                    <MaterialCommunityIcons name="check-circle" size={20} color={COLORS.primaryBlue} />
                                    <Text style={styles.benefitText}>Sessão de Diagnóstico de 30min</Text>
                                </View>
                            </View>
                        )}
                    </View>

                    {/* Form Card */}
                    <BlurView intensity={Platform.OS === 'web' ? 30 : 20} tint="dark" style={[styles.formCard, isMobile && { width: '100%' }]}>
                        <Text style={styles.formHeader}>Solicitar Consultoria</Text>

                        <InputField
                            placeholder="Seu Nome Completo"
                            icon="account"
                            value={name}
                            onChangeText={setName}
                            focusedInput={focusedInput}
                            setFocusedInput={setFocusedInput}
                        />
                        <InputField
                            placeholder="Seu WhatsApp (com DDD)"
                            icon="whatsapp"
                            value={whatsapp}
                            onChangeText={setWhatsapp}
                            focusedInput={focusedInput}
                            setFocusedInput={setFocusedInput}
                        />
                        <InputField
                            placeholder="Site da empresa (se tiver)"
                            icon="web"
                            value={site}
                            onChangeText={setSite}
                            focusedInput={focusedInput}
                            setFocusedInput={setFocusedInput}
                        />
                        <InputField
                            placeholder="Qual seu maior desafio hoje?"
                            icon="rocket-launch"
                            multiline
                            value={challenge}
                            onChangeText={setChallenge}
                            focusedInput={focusedInput}
                            setFocusedInput={setFocusedInput}
                        />

                        <TouchableOpacity style={styles.submitBtn} onPress={handleWhatsAppSubmit}>
                            <Text style={styles.btnText}>QUERO MEU PLANO AGORA</Text>
                            <MaterialCommunityIcons name="arrow-right" size={20} color="#0F172A" />
                        </TouchableOpacity>

                        <Text style={styles.securityText}>
                            <MaterialCommunityIcons name="lock" size={12} color={COLORS.mutedGray} /> Seus dados estão 100% seguros.
                        </Text>
                    </BlurView>
                </View>
            </View>

            {/* Actual Footer Bottom */}
            <View style={styles.footerBottom}>
                <View style={[styles.bottomContent, { paddingHorizontal: isMobile ? 20 : 40, flexDirection: isMobile ? 'column' : 'row' }]}>
                    <View>
                        <Text style={styles.logoText}>Funnel<Text style={styles.logoHighlight}>Core</Text></Text>
                        <Text style={styles.copyright}>© 2026 FunnelCore. Todos os direitos reservados.</Text>
                    </View>

                    <View style={[styles.socialRow, isMobile && { marginTop: 20 }]}>
                        <TouchableOpacity style={styles.socialBtn}><FontAwesome name="instagram" size={20} color={COLORS.softWhite} /></TouchableOpacity>
                        <TouchableOpacity style={styles.socialBtn}><FontAwesome name="linkedin" size={20} color={COLORS.softWhite} /></TouchableOpacity>
                        <TouchableOpacity style={styles.socialBtn}><FontAwesome name="whatsapp" size={20} color={COLORS.softWhite} /></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.deepNavy,
    },
    ctaSection: {
        paddingVertical: 80,
        backgroundColor: '#0F172A',
        // @ts-ignore
        backgroundImage: Platform.OS === 'web' ? 'radial-gradient(circle at 50% 50%, rgba(30, 41, 59, 1) 0%, rgba(15, 23, 42, 1) 100%)' : undefined,
    },
    content: {
        maxWidth: SIZES.containerMaxWidth,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    textColumn: {
        flex: 1,
        maxWidth: 500,
        paddingRight: 20,
    },
    badge: {
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        alignSelf: 'flex-start',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'rgba(245, 158, 11, 0.3)',
    },
    badgeText: {
        color: COLORS.secondaryGold,
        fontWeight: 'bold',
        fontSize: 12,
        letterSpacing: 1,
    },
    ctaTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: COLORS.softWhite,
        marginBottom: 16,
        lineHeight: 44,
    },
    ctaDesc: {
        fontSize: 16,
        color: COLORS.mutedGray,
        lineHeight: 24,
        marginBottom: 32,
    },
    benefitsList: {
        gap: 16,
    },
    benefitItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    benefitText: {
        color: COLORS.softWhite,
        fontSize: 16,
    },
    formCard: {
        flex: 1,
        maxWidth: 500,
        backgroundColor: 'rgba(30, 41, 59, 0.6)',
        borderRadius: 24,
        padding: 32,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        ...Platform.select({
            web: { boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)' },
            default: { elevation: 10 }
        }),
    },
    formHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.softWhite,
        marginBottom: 24,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    inputFocused: {
        borderColor: COLORS.primaryBlue,
        backgroundColor: 'rgba(56, 189, 248, 0.05)',
    },
    input: {
        flex: 1,
        paddingVertical: 16,
        color: COLORS.softWhite,
        fontSize: 16,
        outlineStyle: 'none', // Web specific
    },
    submitBtn: {
        backgroundColor: COLORS.secondaryGold,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 18,
        borderRadius: 12,
        marginTop: 8,
        shadowColor: COLORS.secondaryGold,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    btnText: {
        color: '#0F172A',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 8,
        letterSpacing: 0.5,
    },
    securityText: {
        color: COLORS.mutedGray,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 16,
        opacity: 0.7,
    },
    footerBottom: {
        backgroundColor: '#020617', // Darker than DeepNavy
        paddingVertical: 32,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.05)',
    },
    bottomContent: {
        maxWidth: SIZES.containerMaxWidth,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.softWhite,
        marginBottom: 4,
    },
    logoHighlight: {
        color: COLORS.primaryBlue,
    },
    copyright: {
        color: COLORS.mutedGray,
        fontSize: 14,
    },
    socialRow: {
        flexDirection: 'row',
        gap: 16,
    },
    socialBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
