import {NativeModules, Platform} from 'react-native';
const {StipopModule} = NativeModules;

export const stipopConfigure = () => {
  switch (Platform.OS) {
    case 'android':
      break;
    case 'ios':
      // StipopModule.configure();
      break;
  }
};

export const stipopConnect = userID => {
  switch (Platform.OS) {
    case 'android':
      StipopModule.connect(userID);
      break;

    case 'ios':
      // StipopModule.connect(userID);
      break;
  }
};

export const stipopShowAndHide = ({
  isKeyboardVisible,
  isStipopShowing,
  setIsStipopShowing,
}) => {
  switch (Platform.OS) {
    case 'android':
      StipopModule.show(isKeyboardVisible, isStipopShowing, resultBool => {
        setIsStipopShowing(resultBool);
      });
      break;

    case 'ios':
    // switch (isStipopShowing) {
    //   case true:
    //     StipopModule.hide();
    //     setIsStipopShowing(false);
    //     break;

    //   case false:
    //     StipopModule.show(300);
    //     setIsStipopShowing(true);
    //     break;
    // }
  }
};

export const stipopRemove = () => {
  switch (Platform.OS) {
    case 'android':
      break;

    case 'ios':
      // StipopModule.hide();
      break;
  }
};
