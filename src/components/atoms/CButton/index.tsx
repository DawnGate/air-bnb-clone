import React, {ReactNode} from 'react';
import {Pressable} from 'react-native';

const CButton = ({children}: {children: ReactNode}) => {
  return <Pressable>{children}</Pressable>;
};

export default CButton;
