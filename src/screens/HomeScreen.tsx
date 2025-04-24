import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import CenterModal from '../components/CenterModal'; // adjust path as per your folder

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <CenterModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Modal"
        message="This is a custom message"
        buttonText="Got it"
        position="bottom"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
