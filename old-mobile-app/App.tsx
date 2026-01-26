import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, useWindowDimensions } from 'react-native';
import { Header } from './src/components/Header';
import { Hero } from './src/components/Hero';
import { Services } from './src/components/Services';
import { Process } from './src/components/Process'; // New
import { Footer } from './src/components/Footer';
import { COLORS, SIZES } from './src/constants/theme';
import React from 'react';

export default function App() {
  const { width } = useWindowDimensions();
  const isMobile = width < SIZES.mobileBreakpoint;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Fixed Header */}
      <Header />

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Hero />
        <Services isMobile={isMobile} />
        <Process isMobile={isMobile} />
        <Footer isMobile={isMobile} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.deepNavy,
  },
  scrollContainer: {
    flex: 1,
  },
});
