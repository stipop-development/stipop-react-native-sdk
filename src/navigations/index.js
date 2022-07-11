import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './Stack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default Navigation;
