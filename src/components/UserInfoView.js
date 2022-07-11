import React from 'react';
import {View} from 'react-native';
import {Container, Name, Active} from '../styled/UserInfoViewStyled';

const returnActiveString = isActive => {
  switch (isActive) {
    case true:
      return 'Active now';
    case false:
      return 'Inactive now';
    default:
      return 'Inactive now';
  }
};

const UserInfoView = ({width, name, isActive}) => {
  return (
    <Container width={width}>
      <Name>{name}</Name>
      <View style={{flex: 1}} />
      <Active>{returnActiveString(isActive)}</Active>
    </Container>
  );
};

export default UserInfoView;
