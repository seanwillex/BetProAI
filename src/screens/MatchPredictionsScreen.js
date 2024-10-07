import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

const MatchPredictionsScreen = () => {
  const { predictions } = useSelector((state) => state.predictions);

  const renderItem = ({ item }) => (
    <Card style={styles.predictionCard}>
      <Card.Content>
        <Title>{item.homeTeam} vs {item.awayTeam}</Title>
        <Paragraph>Prediction: {item.prediction}</Paragraph>
        <Paragraph>Odds: {item.odds}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Match Predictions</Text>
      <FlatList
        data={predictions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  predictionCard: {
    marginBottom: 10,
  },
});

export default MatchPredictionsScreen;