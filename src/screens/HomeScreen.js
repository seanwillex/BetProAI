import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';
import PredictionsList from '../components/PredictionsList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.welcomeCard}>
        <Card.Content>
          <Title>Welcome to BetPro.AI</Title>
          <Paragraph>AI-Driven Football Predictions</Paragraph>
        </Card.Content>
      </Card>
      <Text style={styles.sectionTitle}>Recent Predictions</Text>
      <PredictionsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  welcomeCard: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;