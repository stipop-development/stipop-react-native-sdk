import React from 'react';
import {View} from 'react-native';
import BubbleTime from './BubbleTime';
import {BalloonContainer, Emoticon} from '../../styled/ChatItemStyled';

const EmoticonViewOthers = ({value}) => {
  return (
    <BalloonContainer>
      <Emoticon source={{uri: value}} />
      <BubbleTime />
      <View style={{flex: 1}} />
    </BalloonContainer>
  );
};

export default EmoticonViewOthers;
