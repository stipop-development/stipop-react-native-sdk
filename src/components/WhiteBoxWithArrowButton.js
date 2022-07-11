import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import CircleArrowImage from '../../assets/images/circle_arrow.png';
import {
  Container,
  Title,
  ArrowCircleImage,
} from '../styled/WhiteBoxWithArrowButtonStyled';

const WhiteBoxWithArrowButton = ({
  screenWidth,
  title,
  marginBottom,
  onPressOut,
}) => {
  return (
    <TouchableOpacity onPressOut={onPressOut}>
      <Container screenWidth={screenWidth} marginBottom={marginBottom}>
        <Title>{title}</Title>
        <View style={{flex: 1}} />
        <ArrowCircleImage source={CircleArrowImage} />
      </Container>
    </TouchableOpacity>
  );
};

export default WhiteBoxWithArrowButton;
