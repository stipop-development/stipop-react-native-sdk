import React from 'react';
import HeaderView from './chat_item/HeaderView';
import InformationView from './chat_item/InformationView';
import TextViewOthers from './chat_item/TextViewOthers';
import EmoticonViewOthers from './chat_item/EmoticonViewOthers';
import TextViewMe from './chat_item/TextViewMe';
import EmoticonViewMe from './chat_item/EmoticonViewMe';

const ChatItemView = ({item}) => {
  const itemType = item.type;

  switch (itemType) {
    case 'HEADER':
      return <HeaderView />;
    case 'TEXT_OTHERS':
      return <TextViewOthers value={item.value} />;
    case 'EMOTICON_OTHERS':
      return <EmoticonViewOthers value={item.value} />;
    case 'INFORMATION_OTHERS':
      return (
        <InformationView
          value={item.value}
          isKeyboardVisible={item.isKeyboardVisible}
          isStipopShowing={item.isStipopShowing}
          setIsStipopShowing={item.setIsStipopShowing}
        />
      );
    case 'TEXT_ME':
      return <TextViewMe value={item.value} />;
    case 'EMOTICON_ME':
      return <EmoticonViewMe value={item.value} />;
  }
};

export default ChatItemView;
