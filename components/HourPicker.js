import * as React from 'react';
import { Modal,Text } from 'react-native-paper';

export default function HourPicker({visible, setVisible}) {

  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Here comes the hour picker</Text>
        </Modal>
  );
};

