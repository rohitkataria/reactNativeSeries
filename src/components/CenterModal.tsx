import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  message: string;
  title?: string;
  buttonText?: string;
  position?: 'center' | 'bottom' | 'full';
};

const CenterModal: FC<Props> = ({
  isVisible,
  onClose,
  message,
  title = 'Custom Alert',
  buttonText = 'OK',
  position = 'center',
}) => {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        );

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropColor="black"
      backdropOpacity={0.5}
      animationIn={position === 'bottom' ? 'slideInUp' : 'fadeIn'}
      animationOut={position === 'bottom' ? 'slideOutDown' : 'fadeOut'}
      useNativeDriver={true}
      onSwipeComplete={onClose}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      style={
        position === 'full'
          ? styles.modalFull
          : position === 'bottom'
          ? styles.modalBottom
          : styles.modalCenter
      }>
      {position === 'full' ? (
        <SafeAreaView style={styles.fullHeight} edges={['top', 'bottom']}>
          <View style={styles.fullContentWrapper}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
            <Text style={styles.alertTitle}>{title}</Text>
            <Text style={styles.alertMessage}>{message}</Text>
            <TouchableOpacity onPress={onClose} style={styles.button}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <View style={styles.alertBox}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>
          <Text style={styles.alertTitle}>{title}</Text>
          <Text style={styles.alertMessage}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalCenter: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBottom: {
    margin: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalFull: {
    margin: 0,
  },
  alertBox: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10,
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    // top: 10,
    right: 10,
    padding: 5,
    zIndex: 1,
  },
  closeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  alertMessage: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  fullHeight: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 0,
    width: '100%',
  },
  fullContentWrapper: {
    flex: 1,
    paddingTop: 20, // ⬅️ Inner safe padding top
    paddingBottom: 30, // ⬅️ Inner safe padding bottom
    width: '100%',
  },
});

export default CenterModal;
