# magnusai-chatbot-react-native

React Native SDK for magnus AI chatbot

## Installation

```sh
npm install magnusai-chatbot-react-native react-native-webview
```

## Usage

```js
import MagnusAIChatBot from 'magnusai-chatbot-react-native';

// ...

<MagnusAIChatBot
    bgStyle={{
        position: 'absolute',
        top: 17,
        right: 17,
        borderRadius: 50
    }} // for a floating button on top left
    brain_id={"your brain id from the dashboard"}
/>
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
