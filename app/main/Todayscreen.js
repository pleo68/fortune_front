// Todayscreen.js
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

export default function ProfileScreen({navigation}) {
  return (
 <View style={styles.container}>
      <View key="ai" style={styles.aibox}>
        <Text style={styles.title}> 결과제목 </Text>
        <Text style={styles.result}> GPT가 여기에 해석 결과를 보여줍니다. </Text>
      </View>
      <View key='today' style={styles.todaybox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  aibox: { flex: 3, backgroundColor: 'black' },
  todaybox: { flex: 1, backgroundColor: 'grey' },
  title: { fontSize: 18, textAlign: 'center', fontWeight: 'bold', marginBottom: 10, color: 'white' },
  result: { fontSize: 16, textAlign: 'center', color: 'white' }

});
