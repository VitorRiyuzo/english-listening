import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
export default function Result({navigation}) {
  return (
    <View>
      <Text>Resultado</Text>
      <Button
        title="Level"
        onPress={() => navigation.navigate("Level")}
      />
    </View>
  );
}
