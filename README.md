# react-native-simple-view

react-native-simple-view

## Installation

```sh
npm install react-native-simple-view
```

## Usage

```js
import { View, Text, ThemeProvider, themes } from 'react-native-simple-view';

// ...

<ThemeProvider theme={themes.light}>
    <View
        onPress={() => console.warn('press')}
        radius-50
        bg-pink
        padding-10
        center
        margin-10
    >
        <Text size-50 color-blue bold>
        test
        </Text>
    </View>

</ThemeProvider>

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
