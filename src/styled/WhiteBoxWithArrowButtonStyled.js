import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({screenWidth}) => screenWidth - 40}px;
  height: 54px;
  background-color: #ffffff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${({marginBottom}) => marginBottom}px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: ${({theme}) => theme.orange_etc};
  margin-left: 22px;
`;
export const ArrowCircleImage = styled.Image`
  margin-right: 22px;
`;
