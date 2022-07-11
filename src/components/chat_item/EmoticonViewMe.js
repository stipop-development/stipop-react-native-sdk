import React from 'react';
import {View} from 'react-native';
import BubbleTime from './BubbleTime';
import {BalloonContainer, Emoticon} from '../../styled/ChatItemStyled';

const EmoticonViewOthers = ({value}) => {
  return (
    <BalloonContainer>
      <View style={{flex: 1}} />
      <BubbleTime />
      <Emoticon source={{uri: value}} />
    </BalloonContainer>
  );
};

export default EmoticonViewOthers;
