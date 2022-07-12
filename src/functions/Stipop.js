import {NativeModules, Platform} from 'react-native';
const {StipopModule} = NativeModules;

export const stipopConnect = userID => {
  StipopModule.connect(userID);
};

export const stipopShowAndHide = ({
  refTextInput,
  isKeyboardVisible,
  isStipopShowing,
  setIsStipopShowing,
}) => {
  switch (Platform.OS) {
    case 'android':
      refTextInput.current.focus();
      StipopModule.show(isKeyboardVisible, isStipopShowing, resultBool => {
        setIsStipopShowing(resultBool);
      });
      break;

    case 'ios':
      StipopModule.show(
        isKeyboardVisible,
        isStipopShowing,
        (error, resultBool) => {
          setIsStipopShowing(resultBool);
        },
      );
      break;
  }
};

export const stipopRemove = () => {
  if (Platform.OS == 'ios') {
    StipopModule.remove();
  }
};
