import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import ImageButton from './ImageButton';
import BackImage from '../../assets/images/back.png';
import PersonImage from '../../assets/images/person.png';
import MoreImage from '../../assets/images/more.png';
import UserInfoView from './UserInfoView';
import {Container, PersonImageView} from '../styled/NavigationBarStyled';

const NavigationBar = ({navigation, name, isActive}) => {
  const screenWidth = useWindowDimensions().width;
  const userInfoViwLeftWidth = 12 + 24 + 12 + 38 + 12;
  const userInfoViewRightWidth = 12 + 24 + 12;
  const userInfoViewWidth =
    screenWidth - userInfoViwLeftWidth - userInfoViewRightWidth;

  return (
    <Container>
      <ImageButton
        style={{marginLeft: 12}}
        source={BackImage}
        imageWidth={24}
        imageHeight={24}
        onPressOut={() => navigation.pop()}
      />
      <PersonImageView style={{marginLeft: 8}} source={PersonImage} />
      <View style={{marginStart: 12, flex: 1}}>
        <UserInfoView
          width={userInfoViewWidth}
          name={name}
          isActive={isActive}
        />
      </View>
      <ImageButton
        style={{marginRight: 12}}
        source={MoreImage}
        imageWidth={24}
        imageHeight={24}
      />
    </Container>
  );
};

export default NavigationBar;
