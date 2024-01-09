import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import MagnusAIChatBot from 'magnusai-chatbot-react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <MagnusAIChatBot
        bgStyle={{
          position: 'absolute',
          top: 100,
          right: 17,
          borderRadius: 50
        }}
        brain_id={"magnus ai chatbot id from your dashboard"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
