import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Title, Paragraph, ActivityIndicator } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserStart, fetchUserSuccess, fetchUserFailure } from '../redux/userSlice';

const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(fetchUserStart());
      try {
        // In a real app, you would fetch user data from an API here
        const mockUser = {
          name: 'John Doe',
          email: 'john.doe@example.com',
          memberSince: '2023-01-01',
          predictionAccuracy: '75%',
        };
        dispatch(fetchUserSuccess(mockUser));
      } catch (error) {
        dispatch(fetchUserFailure(error.toString()));
      }
    };

    fetchUser();
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator animating={true} size="large" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>Error: {error}</Text>;
  }

  if (!user) {
    return <Text style={styles.error}>No user data available</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Card>
        <Card.Content>
          <Title>{user.name}</Title>
          <Paragraph>Email: {user.email}</Paragraph>
          <Paragraph>Member Since: {user.memberSince}</Paragraph>
          <Paragraph>Prediction Accuracy: {user.predictionAccuracy}</Paragraph>
        </Card.Content>
      </Card>
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
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default UserProfileScreen;