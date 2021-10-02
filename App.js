import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [value, setValue] = useState("")
  return (
    <View style={styles.container}>
      <Text>Welcome to CI/CD Trainning App!</Text>
      <TextInput 
        placeholder={"...what is your name"}
        onChangeText={(name) => setValue(name)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
