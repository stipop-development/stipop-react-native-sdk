import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: ${({theme}) => theme.stipop_typing_view_background_light};
  height: ${({TEXT_CONTAINER_VIEW_HEIGHT}) => TEXT_CONTAINER_VIEW_HEIGHT}px;
`;

export const TypingTextInput = styled.TextInput.attrs({
  multiline: false,
  placeholder: 'Type your message',
  placeholderTextColor: 'lightgray',
  autoCapitalize: 'none',
  autoCorrect: false,
  returnKeyType: 'send',
  blurOnSubmit: false,
})`
  margin-left: 16px;
  margin-right: 4px;
  width: ${({screenWidth}) =>
    screenWidth - (12 + 32 + 8 + 16) - (24 + 16 + 16)}px;
  height: ${({height}) => height}px;
  color: black;
`;

export const TextInputView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({theme}) => theme.stipop_text_input_background_stroke_light};
  margin-left: 8px;
  margin-right: 16px;
`;
