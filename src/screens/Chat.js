import React, {useState, useEffect, useRef} from 'react';
import {Keyboard, Platform, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import NavigationBar from '../components/NavigationBar';
import ChatItemView from '../components/ChatItemView';
import TypingView from '../components/TypingView';
import {
  Container,
  StatusBarBackground,
  MessageList,
} from '../styled/ChatStyled';
import {TEXT_CONTAINER_VIEW_HEIGHT} from '../constants/Constant';

const renderItem = ({item}) => {
  return <ChatItemView item={item} />;
};

const Chat = ({navigation, route}) => {
  const userID = route.params.userID;

  const insets = useSafeAreaInsets();

  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [typingViewMarginBottom, setTypingViewMarginBottom] = useState(0);

  const refTextInput = useRef(null);
  const refMessageList = useRef(null);

  var keyboardWillShowListener = null;
  var keyboardWillHideListener = null;

  useEffect(() => {
    keyboardListenerInit();

    return () => {
      keyboardListenerRemove();
    };
  }, []);

  const keyboardListenerInit = () => {
    if (Platform.OS === 'ios') {
      keyboardWillShowListener = Keyboard.addListener(
        'keyboardWillShow',
        onKeyboardWillShow,
      );
      keyboardWillHideListener = Keyboard.addListener(
        'keyboardWillHide',
        onKeyboardWillHide,
      );
    }
  };

  const keyboardListenerRemove = () => {
    if (Platform.OS === 'ios') {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    }
  };

  const onKeyboardWillShow = event => {
    const keyboardHeight = event.endCoordinates.height;
    const marginBottom = getMarginBottom(keyboardHeight);
    setTypingViewMarginBottom(marginBottom + TEXT_CONTAINER_VIEW_HEIGHT);
  };

  const getMarginBottom = keyboardHeight => {
    const bottomInset = insets.bottom;
    const typingViewHeight = TEXT_CONTAINER_VIEW_HEIGHT;
    return keyboardHeight - bottomInset - typingViewHeight;
  };

  const onKeyboardWillHide = () => {
    setTypingViewMarginBottom(0);
  };

  return (
    <Container insets={insets}>
      <StatusBarBackground insets={insets} />

      <NavigationBar navigation={navigation} name={'Tubby'} isActive={true} />
      <MessageList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        ref={refMessageList}
        onContentSizeChange={() => refMessageList.current.scrollToEnd()}
      />
      <TypingView
        refTextInput={refTextInput}
        userID={userID}
        text={text}
        setText={setText}
        setData={setData}
        marginBottom={typingViewMarginBottom}
      />
    </Container>
  );
};

export default Chat;
