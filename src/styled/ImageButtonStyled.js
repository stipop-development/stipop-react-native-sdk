import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({containerWidth, imageWidth}) =>
    containerWidth ? containerWidth : imageWidth}px;
  height: ${({containerHeight, imageHeight}) =>
    containerHeight ? containerHeight : imageHeight}px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
`;
