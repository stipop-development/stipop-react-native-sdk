import React from 'react';
import {TouchableOpacity, Linking, Platform} from 'react-native';
import GoToDocsArrowImage from '../../assets/images/go_to_docs_arrow.png';
import {Container, Title, ArrowImage} from '../styled/GoToDocsButtonStyled';

const openURL = () => {
  switch (Platform.OS) {
    case 'android':
      Linking.openURL(
        'https://docs.stipop.io/en/sdk/react-native/get-started/before-you-begin/android',
      );
      break;
    case 'ios':
      Linking.openURL(
        'https://docs.stipop.io/en/sdk/ios/get-started/quick-start',
      );
      break;
  }
};

const GoToDocsButton = () => {
  return (
    <TouchableOpacity onPressOut={openURL}>
      <Container>
        <Title>Go to Docs</Title>
        <ArrowImage source={GoToDocsArrowImage} />
      </Container>
    </TouchableOpacity>
  );
};

export default GoToDocsButton;
