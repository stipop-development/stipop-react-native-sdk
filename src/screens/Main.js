import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, useWindowDimensions, Platform, Keyboard} from 'react-native';
import MainBackgroundImage from '../../assets/images/main_background.png';
import StipopTextLogoImage from '../../assets/images/stipop_text_logo.png';
import GoToDocsButton from '../components/GoToDocsButton';
import WhiteBoxWithArrowButton from '../components/WhiteBoxWithArrowButton';
import {
  OuterContainer,
  BackgroundImage,
  StipopTextLogo,
  WelcomeText,
  InnerContainer,
} from '../styled/MainStyled';
import UUIDGenerator from 'react-native-uuid-generator';

const navigateToChat = (navigation, type) => {
  switch (type) {
    case 'RANDOM':
      UUIDGenerator.getRandomUUID(uuid => {
        navigation.navigate('Chat', {userID: uuid});
      });
      break;
    case 'COMMON':
      navigation.navigate('Chat', {userID: 'someone_user_id'});
      break;
  }
};

const Main = ({navigation}) => {
  const screenWidth = useWindowDimensions().width;
  Keyboard.dismiss();

  return (
    <OuterContainer>
      <BackgroundImage source={MainBackgroundImage}>
        <InnerContainer insets={useSafeAreaInsets()}>
          <StipopTextLogo source={StipopTextLogoImage} />
          <WelcomeText>
            Welcome to{'\n'}Stipop demo app :{'}'}
          </WelcomeText>
          <View style={{flex: 1}} />
          <WhiteBoxWithArrowButton
            title="New user login"
            screenWidth={screenWidth}
            marginBottom={20}
            onPressOut={() => navigateToChat(navigation, 'RANDOM')}
          />
          <WhiteBoxWithArrowButton
            title="Common user login"
            screenWidth={screenWidth}
            marginBottom={30}
            onPressOut={() => navigateToChat(navigation, 'COMMON')}
          />
          <GoToDocsButton />
        </InnerContainer>
      </BackgroundImage>
    </OuterContainer>
  );
};

export default Main;
