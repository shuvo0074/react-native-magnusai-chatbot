import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Keyboard, Modal, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';
const { height, width } = Dimensions.get('window')

const MagnusAIChatBot = ({
  bgStyle = {},
  brain_id,
  show_button = true,
  panel_visible = false,
  onDismiss = _ => { }
}) => {
  const [visible, setVisible] = useState(false)
  const [keyboardHeight, setkeyboardHeight] = useState(0)
  useEffect(_ => {
    if (!brain_id)
      throw new Error("Please add chatbot id")
    const keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', e => { setkeyboardHeight(e.endCoordinates.height); });
    const keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', e => { setkeyboardHeight(0); });

    return _ => {
      keyboardWillShowSub.remove()
      keyboardWillHideSub.remove()
    }

  }, [])

  useEffect(() => {
    setVisible(panel_visible)
  }, [panel_visible])

  useEffect(() => {
    if (!visible)
      onDismiss()
  }, [visible])
  
  return (
    <View>
      {
        show_button ?
          <TouchableOpacity
            style={[{
              height: 45,
              width: 45,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#a9acae',
              backgroundColor: 'white',
              shadowOffset: {
                width: 4,
                height: 4,
              },
              shadowRadius: 4.4,
              shadowOpacity: 0.3,
              elevation: 3,
              zIndex: 1000
            }, bgStyle]}
            onPress={_ => setVisible(true)}
          >
            <Image
              source={{ uri: 'https://cdn.iconscout.com/icon/free/png-512/free-chat-1434-460368.png' }}
              style={{
                height: 22,
                width: 22,
                backgroundColor: 'transparent',
              }}
            />
          </TouchableOpacity>
          : null
      }
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={visible}
        // presentationStyle={'overFullScreen'}
        onDismiss={_ => setVisible(false)}
      >
        <TouchableOpacity
          style={{
            // width,
            height:
              keyboardHeight ?
                height - keyboardHeight - height / 2.1
                : 44
            ,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
          onPress={_ => setVisible(false)}
        />
        <WebView
          scrollEnabled={false}
          style={{
            width,
            maxHeight:
              keyboardHeight ?
                height / 2
                : height + 44
            ,
            marginBottom: keyboardHeight ? 0 : 5,
            backgroundColor: 'rgba(0,0,0,0.16)'
          }}
          // source={{ uri: 'https://www.google.com' }}
          source={{
            html: `<! DOCTYPE html>
          <html lang="en">
          <head>
          <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
          </head>
          
            <iframe
            src="http://dev-magnusai.otoride.co:8033/?brainId=${brain_id}"
            style="width: 100%; height: 100%; border: none; border-top-left-radius: 12px; border-top-right-radius: 12px;"
            />
             
          </html>
          ` }}
        />

        <View
          style={{
            height: keyboardHeight,
          }}
        />
      </Modal>
    </View>
  );
};

export default MagnusAIChatBot;
