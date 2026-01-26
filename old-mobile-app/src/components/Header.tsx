import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, Platform } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

export const Header = () => {
    const { width } = useWindowDimensions();
    const isMobile = width < SIZES.mobileBreakpoint;
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <BlurView intensity={90} tint="dark" style={styles.headerContainer}>
            <View style={styles.accessibilityWrapper} accessibilityRole="header">
                <View style={[styles.headerContent, { paddingHorizontal: isMobile ? 20 : 40 }]}>
                    {/* Logo */}
                    <View style={styles.logoContainer}>
                        <View style={styles.logoIcon}>
                            <Text style={{ fontSize: 20 }}>🚀</Text>
                        </View>
                        <Text style={styles.logoText}>Funnel<Text style={styles.logoHighlight}>Core</Text></Text>
                    </View>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <View style={styles.navLinks} accessibilityRole={"navigation" as any}>
                            <TouchableOpacity><Text style={styles.navText}>Serviços</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.navText}>Metodologia</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.navText}>Resultados</Text></TouchableOpacity>
                        </View>
                    )}

                    {/* CTA or Menu Button */}
                    {isMobile ? (
                        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
                            <MaterialIcons name="menu" size={28} color={COLORS.softWhite} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.ctaButton}>
                            <Text style={styles.ctaText}>Consultoria Grátis</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* Mobile Menu Dropdown */}
                {isMobile && menuOpen && (
                    <View style={styles.mobileMenu}>
                        <Text style={styles.mobileNavItem}>Serviços</Text>
                        <Text style={styles.mobileNavItem}>Metodologia</Text>
                        <Text style={styles.mobileNavItem}>Contato</Text>
                    </View>
                )}
            </View>
        </BlurView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 100,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.glassBorder,
    },
    accessibilityWrapper: {
        width: '100%',
    },
    headerContent: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: SIZES.containerMaxWidth,
        width: '100%',
        alignSelf: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.softWhite,
        letterSpacing: -0.5,
    },
    logoHighlight: {
        color: COLORS.primaryBlue,
    },
    navLinks: {
        flexDirection: 'row',
        gap: 32,
    },
    navText: {
        color: COLORS.mutedGray,
        fontSize: 15,
        fontWeight: '500',
    },
    ctaButton: {
        backgroundColor: COLORS.secondaryGold,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12, // modern rounded corners
    },
    ctaText: {
        color: '#0F172A', // Dark text on Gold for readability
        fontWeight: 'bold',
        fontSize: 14,
    },
    mobileMenu: {
        backgroundColor: COLORS.deepNavy,
        padding: 24,
        borderTopWidth: 1,
        borderTopColor: COLORS.glassBorder,
    },
    mobileNavItem: {
        color: COLORS.softWhite,
        fontSize: 18,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    }
});
