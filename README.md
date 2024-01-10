# magnusai-chatbot-react-native

React Native SDK for magnus AI chatbot

<img src="https://github.com/shuvo0074/react-native-magnusai-chatbot/assets/38061271/787311e1-b366-4b3f-8f5c-d07b5edaaec3" width="326" height="676" />

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
    brain_id={"your-brain-id-from-the-dashboard"}
/>
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
