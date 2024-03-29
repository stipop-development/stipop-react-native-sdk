import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  useWindowDimensions,
  Platform,
  NativeModules,
  Keyboard,
  NativeEventEmitter,
} from 'react-native';
import Emoticon from '../../assets/images/emoticon.png';
import SendActive from '../../assets/images/send_active.png';
import SendInactive from '../../assets/images/send_inactive.png';
import ImageButton from './ImageButton';
import {
  Container,
  TypingTextInput,
  TextInputView,
} from '../styled/TypingViewStyled';
import {
  TEXT_CONTAINER_VIEW_HEIGHT,
  TEXT_INPUT_VIEW_HEIGHT,
} from '../constants/Constant';
import {sendMessage, sendInitialMessage} from '../functions/Chat';
import {
  stipopConnect,
  stipopShowAndHide,
  stipopRemove,
} from '../functions/Stipop';

var nativeEventEmitter = null;

switch (Platform.OS) {
  case 'android':
    const {StipopModule} = NativeModules;
    nativeEventEmitter = new NativeEventEmitter(StipopModule);
    break;

  case 'ios':
    const {StipopEmitter} = NativeModules;
    nativeEventEmitter = new NativeEventEmitter(StipopEmitter);
    break;
}

const TypingView = ({
  refTextInput,
  userID,
  text,
  setText,
  setData,
  marginBottom,
}) => {
  const screenWidth = useWindowDimensions().width;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isStipopShowing, setIsStipopShowing] = useState(false);

  var keyboardDidShowListener = null;
  var keyboardDidHideListener = null;

  var stickerSingleTapListener = null;
  var stickerDoubleTapListener = null;

  const keyboardListenerInit = () => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', event => {
      setKeyboardVisible(true);
    });
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', event => {
      setKeyboardVisible(false);
      setIsStipopShowing(false);
    });
  };

  const tapListenerInit = () => {
    stickerSingleTapListener = nativeEventEmitter.addListener(
      'onStickerSingleTapped',
      event => {
        console.log('Single tapped');
        const stickerImg = event.stickerImg;
        sendMessage({
          type: 'EMOTICON_ME',
          value: stickerImg,
          setText: setText,
          setData: setData,
        });
      },
    );
    stickerDoubleTapListener = nativeEventEmitter.addListener(
      'onStickerDoubleTapped',
      event => {
        console.log('Double tapped');
        const stickerImg = event.stickerImg;
        sendMessage({
          type: 'EMOTICON_ME',
          value: stickerImg,
          setText: setText,
          setData: setData,
        });
      },
    );
  };

  const keyboardListenerRemove = () => {
    if (keyboardDidHideListener != null) {
      keyboardDidHideListener.remove();
    }
    if (keyboardDidShowListener != null) {
      keyboardDidShowListener.remove();
    }
  };

  const tapListenerRemove = () => {
    if (stickerSingleTapListener != null) {
      stickerSingleTapListener.remove();
    }
    if (stickerDoubleTapListener != null) {
      stickerDoubleTapListener.remove();
    }
  };

  useEffect(() => {
    stipopConnect(userID);
    keyboardListenerInit();
    tapListenerInit();
    sendInitialMessage({
      setText: setText,
      setData: setData,
      refTextInput: refTextInput,
      isKeyboardVisible: isKeyboardVisible,
      isStipopShowing: isStipopShowing,
      setIsStipopShowing: setIsStipopShowing,
    });

    return () => {
      stipopRemove();
      keyboardListenerRemove();
      tapListenerRemove();
    };
  }, []);

  return (
    <Container
      style={{
        marginBottom: marginBottom,
      }}
      TEXT_CONTAINER_VIEW_HEIGHT={TEXT_CONTAINER_VIEW_HEIGHT}>
      <ImageButton
        style={{
          marginStart: 12,
        }}
        source={Emoticon}
        imageWidth={32}
        imageHeight={32}
        isOn={isStipopShowing}
        onPressOut={() => {
          stipopShowAndHide({
            refTextInput,
            isKeyboardVisible,
            isStipopShowing,
            setIsStipopShowing,
          });
        }}
      />
      <TextInputView TEXT_INPUT_VIEW_HEIGHT={TEXT_INPUT_VIEW_HEIGHT}>
        <TypingTextInput
          screenWidth={screenWidth}
          height={TEXT_INPUT_VIEW_HEIGHT}
          value={text}
          onChangeText={setText}
          ref={refTextInput}
          onFocus={() => {
            if (Platform.OS == 'ios') {
              setIsStipopShowing(false);
            }
          }}
          onSubmitEditing={() => {
            sendMessage({
              type: 'TEXT_ME',
              value: text,
              setText: setText,
              setData: setData,
            });
          }}
        />
        <View style={{flex: 1}} />
        <ImageButton
          style={{marginRight: 16}}
          source={text.trim() ? SendActive : SendInactive}
          imageWidth={24}
          imageHeight={24}
          onPressOut={() => {
            sendMessage({
              type: 'TEXT_ME',
              value: text,
              setText: setText,
              setData: setData,
            });
          }}
        />
      </TextInputView>
    </Container>
  );
};

export default TypingView;
