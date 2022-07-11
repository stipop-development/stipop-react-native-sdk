import React from 'react';
import {View} from 'react-native';
import BubbleTime from './BubbleTime';
import {
  BalloonContainer,
  TextBalloonOthers,
  TextTextOthers,
} from '../../styled/ChatItemStyled';

const OthersTextView = ({value}) => {
  return (
    <BalloonContainer>
      <TextBalloonOthers>
        <TextTextOthers>{value}</TextTextOthers>
      </TextBalloonOthers>
      <BubbleTime />
      <View style={{flex: 1}} />
    </BalloonContainer>
  );
};

export default OthersTextView;
