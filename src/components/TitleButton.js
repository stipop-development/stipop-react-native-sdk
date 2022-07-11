import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Title} from '../styled/TitleButtonStyled';

const TitleButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Title>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
};

export default TitleButton;
