export const sendMessage = ({
  type,
  value,
  setText,
  setData,
  refTextInput,
  isKeyboardVisible,
  isStipopShowing,
  setIsStipopShowing,
}) => {
  if (value != '') {
    setData(data => {
      var indexID = data.length;

      var item = {
        id: indexID,
        type: type,
        value: value,
        refTextInput: refTextInput,
        isKeyboardVisible: isKeyboardVisible,
        isStipopShowing: isStipopShowing,
        setIsStipopShowing: setIsStipopShowing,
      };
      return [...data, item];
    });

    if (type === 'TEXT_ME') {
      setText('');
    }
  }
};

export const sendInitialMessage = ({
  setText,
  setData,
  refTextInput,
  isKeyboardVisible,
  isStipopShowing,
  setIsStipopShowing,
}) => {
  // Clear data.
  setData([]);

  // Header.
  sendMessage({
    type: 'HEADER',
    value: 'HEADER',
    setText: setText,
    setData: setData,
  });

  // 1. Hi, there,
  sendMessage({
    type: 'TEXT_OTHERS',
    value: 'Hi, there! 👋<',
    setText: setText,
    setData: setData,
  });

  // 2. Tubby emoticon.
  sendMessage({
    type: 'EMOTICON_OTHERS',
    value: 'https://img.stipop.io/2020/3/31/1585719674256_CookieArrow_size.gif',
    setText: setText,
    setData: setData,
  });

  // 3. Welcome message.
  sendMessage({
    type: 'TEXT_OTHERS',
    value: `Welcome to Stipop SDK!
    Press the button below to get started.`,
    setText: setText,
    setData: setData,
  });

  // 4. Try the sticker feature.
  sendMessage({
    type: 'INFORMATION_OTHERS',
    value: 'Try the sticker feature. 🔽',
    setText: setText,
    setData: setData,
    refTextInput: refTextInput,
    isKeyboardVisible: isKeyboardVisible,
    isStipopShowing: isStipopShowing,
    setIsStipopShowing: setIsStipopShowing,
  });
};
