import * as React from 'react';

import { StyleSheet, View as ReactView } from 'react-native';
import { View, Text, ThemeProvider, themes } from 'react-native-simple-view';

export default function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <ReactView style={styles.container}>
        <View
          // onPress={() => console.warn('ee')}
          safe
          style={{ height: 200 }}
          // radius-50
          bg-pink
          // padding-50
          // center
          // marginV-50
        >
          <Text size-50 color-blue bold>
            test
          </Text>
          <Text>test</Text>
        </View>
      </ReactView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 50,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
