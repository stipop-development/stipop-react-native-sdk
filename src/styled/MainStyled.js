import styled from 'styled-components/native';

export const OuterContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;
export const StipopTextLogo = styled.Image`
  margin-top: 118px;
`;

export const WelcomeText = styled.Text`
  margin-top: 124px;
  font-size: 35px;
  font-weight: 500;
  color: #ffffff;
  padding: 0 30px;
`;
export const InnerContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: ${({insets: {left}}) => left}px;
  padding-right: ${({insets: {right}}) => right}px;
`;
