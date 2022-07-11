import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: ${({insets: {bottom}}) => bottom}px;
  padding-left: ${({insets: {left}}) => left}px;
  padding-right: ${({insets: {right}}) => right}px;
  background-color: ${({theme}) => theme.blue_ice};
`;

export const StatusBarBackground = styled.View`
  background-color: ${({theme}) => theme.orange_reddish};
  width: 100%;
  height: ${({insets: {top}}) => (top == 0 ? 0 : top)}px;
`;

export const MessageList = styled.FlatList`
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
`;
