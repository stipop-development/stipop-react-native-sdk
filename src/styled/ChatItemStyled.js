import styled from 'styled-components/native';

// Header.
export const HeaderContainer = styled.View`
  align-items: center;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const HeaderLogoImageView = styled.Image`
  margin-top: 17px;
`;

export const HeaderText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.grey_brown};
  margin-top: 10px;
`;

// Body.
export const BalloonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 10px;
`;

/// Text.
export const BalloonText = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  max-width: 220px;
`;

export const BalloonTextOthers = styled(BalloonText)`
  border-bottom-right-radius: 20px;
  background-color: white;
`;

export const BalloonTextMe = styled(BalloonText)`
  border-bottom-left-radius: 20px;
  background-color: ${({theme}) => theme.chat_bubble_background_me};
`;

export const TextText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
`;

export const TextTextOthers = styled(TextText)`
  color: ${({theme}) => theme.chat_bubble_text_others};
`;

export const TextTextMe = styled(TextText)`
  color: ${({theme}) => theme.chat_bubble_text_me};
`;

/// Emoticon.
export const Emoticon = styled.Image`
  width: 90px;
  height: 90px;
`;

/// Information.
export const BalloonInformation = styled.View`
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({theme}) => theme.orange_border};
  background-color: white;
  max-width: 220px;
`;

export const InformationText = styled(TextText)`
  color: ${({theme}) => theme.grey_brownish};
`;

/// Time.
export const Time = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${({theme}) => theme.chat_bubble_time};
  margin-left: 6px;
  margin-right: 6px;
`;
