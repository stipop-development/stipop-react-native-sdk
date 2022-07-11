import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.orange_reddish};
  width: 100%;
  height: 48px;
  flex-direction: row;
  align-items: center;
`;

export const PersonImageView = styled.Image`
  width: 38px;
  height: 38px;
`;
