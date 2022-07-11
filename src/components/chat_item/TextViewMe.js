import React from 'react';
import {View} from 'react-native';
import BubbleTime from './BubbleTime';
import {
  BalloonContainer,
  BalloonTextMe,
  TextTextMe,
} from '../../styled/ChatItemStyled';

const TextViewMe = ({value}) => {
  return (
    <BalloonContainer>
      <View style={{flex: 1}} />
      <BubbleTime />
      <BalloonTextMe>
        <TextTextMe>{value}</TextTextMe>
      </BalloonTextMe>
    </BalloonContainer>
  );
};

export default TextViewMe;
