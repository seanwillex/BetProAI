import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPredictionsStart, fetchPredictionsSuccess, fetchPredictionsFailure } from '../redux/predictionsSlice';

const PredictionsList = () => {
  const dispatch = useDispatch();
  const { predictions, loading, error } = useSelector((state) => state.predictions);

  useEffect(() => {
    const fetchPredictions = async () => {
      dispatch(fetchPredictionsStart());
      try {
        // In a real app, you would fetch data from an API here
        const mockPredictions = [
          { id: '1', homeTeam: 'Team A', awayTeam: 'Team B', prediction: 'Home Win' },
          { id: '2', homeTeam: 'Team C', awayTeam: 'Team D', prediction: 'Draw' },
        ];
        dispatch(fetchPredictionsSuccess(mockPredictions));
      } catch (error) {
        dispatch(fetchPredictionsFailure(error.toString()));
      }
    };

    fetchPredictions();
  }, [dispatch]);

  if (loading) {
    return <Text>Loading predictions...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const renderItem = ({ item }) => (
    <View style={styles.predictionItem}>
      <Text>{item.homeTeam} vs {item.awayTeam}</Text>
      <Text>Prediction: {item.prediction}</Text>
    </View>
  );

  return (
    <FlatList
      data={predictions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  predictionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default PredictionsList;