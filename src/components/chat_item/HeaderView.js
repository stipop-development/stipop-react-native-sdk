import React from 'react';
import StipopBoxLogoImage from '../../../assets/images/stipop_box_logo.png';
import {
  HeaderContainer,
  HeaderLogoImageView,
  HeaderText,
} from '../../styled/ChatItemStyled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogoImageView source={StipopBoxLogoImage} />
      <HeaderText>Integrate 150,000 free stickers into your app</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
