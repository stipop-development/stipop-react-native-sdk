import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import BubbleTime from './BubbleTime';
import {
  BalloonContainer,
  BalloonInformation,
  InformationText,
} from '../../styled/ChatItemStyled';
import {stipopShowAndHide} from '../../functions/Stipop';

const InformationView = ({
  value,
  isKeyboardVisible,
  isStipopShowing,
  setIsStipopShowing,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        stipopShowAndHide({
          isKeyboardVisible: isKeyboardVisible,
          isStipopShowing: isStipopShowing,
          setIsStipopShowing: setIsStipopShowing,
        });
      }}>
      <BalloonContainer>
        <BalloonInformation>
          <InformationText>{value}</InformationText>
        </BalloonInformation>
        <BubbleTime />
        <View style={{flex: 1}} />
      </BalloonContainer>
    </TouchableOpacity>
  );
};

export default InformationView;
