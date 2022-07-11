import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({width}) => width}px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  flex-direction: column;
`;

export const Active = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.light_salmon};
`;
