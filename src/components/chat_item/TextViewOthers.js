import React from 'react';
import {View} from 'react-native';
import BubbleTime from './BubbleTime';
import {
  BalloonContainer,
  BalloonTextOthers,
  TextTextOthers,
} from '../../styled/ChatItemStyled';

const TextViewOthers = ({value}) => {
  return (
    <BalloonContainer>
      <BalloonTextOthers>
        <TextTextOthers>{value}</TextTextOthers>
      </BalloonTextOthers>
      <BubbleTime />
      <View style={{flex: 1}} />
    </BalloonContainer>
  );
};

export default TextViewOthers;
