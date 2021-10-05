import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';

type TOverlayProps = {
  modalVisible?: boolean;
}

const ModalOverlay: React.FC<TOverlayProps> = ({ modalVisible }) => {
    const opacity = useState(new Animated.Value(0))[0];

    useEffect(() => {
      if (modalVisible) {
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    }, [modalVisible]);

  return (
    <>
      {
        modalVisible &&
        <Animated.View
          style={{
            opacity,
            height: '100%',
            width: '100%',
            backgroundColor: 'black',
            position: 'absolute',
            zIndex: 2,
            top: 0 }}
        />
      }
    </>
  )
}

export default ModalOverlay;
