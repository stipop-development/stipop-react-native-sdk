import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Image} from '../styled/ImageButtonStyled';

const ImageButton = ({
  style,
  source,
  containerWidth,
  containerHeight,
  imageWidth,
  imageHeight,
  onPressOut,
  isOn,
}) => {
  return (
    <TouchableOpacity onPressOut={onPressOut}>
      <Container
        style={style}
        containerWidth={containerWidth}
        containerHeight={containerHeight}
        imageWidth={imageWidth}
        imageHeight={imageHeight}>
        <Image
          style={{
            tintColor: isOn == true ? '#FF5D1E' : null,
          }}
          source={source}
          width={imageWidth}
          height={imageHeight}
        />
      </Container>
    </TouchableOpacity>
  );
};

export default ImageButton;
