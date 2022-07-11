export const sendMessage = ({
  type,
  value,
  setText,
  setData,
  setIndexID,
  isKeyboardVisible,
  isStipopShowing,
  setIsStipopShowing,
}) => {
  if (value != '') {
    setIndexID(indexID => {
      var newIndexID = indexID + 1;
      var item = {
        id: newIndexID,
        type: type,
        value: value,
        isKeyboardVisible: isKeyboardVisible,
        isStipopShowing: isStipopShowing,
        setIsStipopShowing: setIsStipopShowing,
      };

      if (type === 'TEXT_ME') {
        setText('');
      }

      setData(data => {
        var dataArr = [];

        if (data.length != 0) {
          if (item.id != data[data.length - 1].id) {
            dataArr = [...data, item];
          } else {
            dataArr = data;
          }
          return dataArr;
        } else {
          return [...data, item];
        }
      });

      return newIndexID;
    });
  }
};

export const sendInitialMessage = ({
  setText,
  setData,
  setIndexID,
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
    setIndexID: setIndexID,
  });

  // 1. Hi, there,
  sendMessage({
    type: 'TEXT_OTHERS',
    value: 'Hi, there! 👋<',
    setText: setText,
    setData: setData,
    setIndexID: setIndexID,
  });

  // 2. Tubby emoticon.
  sendMessage({
    type: 'EMOTICON_OTHERS',
    value: 'https://img.stipop.io/2020/3/31/1585719674256_CookieArrow_size.gif',
    setText: setText,
    setData: setData,
    setIndexID: setIndexID,
  });

  // 3. Welcome message.
  sendMessage({
    type: 'TEXT_OTHERS',
    value: `Welcome to Stipop SDK!
    Press the button below to get started.`,
    setText: setText,
    setData: setData,
    setIndexID: setIndexID,
  });

  // 4. Try the sticker feature.
  sendMessage({
    type: 'INFORMATION_OTHERS',
    value: 'Try the sticker feature. 🔽',
    setText: setText,
    setData: setData,
    setIndexID: setIndexID,
    isKeyboardVisible: isKeyboardVisible,
    isStipopShowing: isStipopShowing,
    setIsStipopShowing: setIsStipopShowing,
  });
};
