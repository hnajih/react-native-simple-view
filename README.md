# react-native-simple-view

react-native-simple-view

## Installation

```sh
npm install react-native-simple-view
```

## Usage

```js
import { View, Text } from 'react-native-simple-view';

// ...
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
</View>;
```

## Available View Props

| name             | default |                                description |
| ---------------- | :-----: | -----------------------------------------: |
| row              |  false  |                         row flex direction |
| wrap             |  false  |                               wrap content |
| center           |  false  | center content vertically and horizontally |
| spread           |  false  |            spread content across main axis |
| right            |  false  |                 align content to the right |
| left             |  false  |                  align content to the left |
| top              |  false  |                   align content to the top |
| bottom           |  false  |                align content to the bottom |
| safe             |  false  |      the view is wrapped with SafeAreaView |
| onPress          |  null   |                             on press event |
| padding-{number} |    0    |                               view padding |
| margin-{number}  |    0    |                                view margin |
| radius-{number}  |    0    |                                view radius |

## Available Text Props

| name          | default |   description |
| ------------- | :-----: | ------------: |
| bold          |  false  | text boldness |
| size-{number} |  null   |     font size |
| color-{color} |  null   |    text color |

## Theme Provider

to setup default props for your View Wrap your root component in the <ThemeProvider>

```js
import { ThemeProvider, themes } from 'react-native-simple-view';

const mytheme = {
    ...themes.light,
    colors: {
      ...themes.light.colors,
      primary: 'white',
      secondary: 'black',
      text: 'white',
      bg: 'black',
    },
    layout: {
        padding: 5,
        radius: 15,
    },
}

<ThemeProvider theme={mytheme}>
    <App/>
</ThemeProvider>

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
