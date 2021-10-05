import React, { ReactNode } from 'react';
import { ModalProps, TouchableWithoutFeedback, View } from 'react-native';

import { Modal, Container, Bar } from './styles';

import Background from '../Background';
import ModalOverlay from '../ModalOverlay';

type TModalViewProps = ModalProps & {
  children: ReactNode;
  handleCloseModal: () => void;
  height: number;
}

const ModalView: React.FC<TModalViewProps> = ({ children, height, handleCloseModal, visible, ...rest }) => {
  return (
    <>
      <Modal
        animationType='slide'
        transparent
        visible={visible}
        {...rest}
      >
        <Container style={{ height: `${height}%` }}>
          <Background>
            <Bar />
            {children}
          </Background>
        </Container>
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={{ height: '100%', width: '100%', opacity: 0 }} />
        </TouchableWithoutFeedback>
      </Modal>
      <ModalOverlay modalVisible={visible} />
    </>
  )
}

export default ModalView;
