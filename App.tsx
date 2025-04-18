import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {cameraPermission, micPermission} from './src/utilities/Permissions';

const App = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [isFrontCamera, setIsFrontCamera] = useState(false);

  const cameraRef = useRef<Camera>(null);
  const device = useCameraDevice(isFrontCamera ? 'front' : 'back');

  useEffect(() => {
    (async () => {
      const cam = await cameraPermission();
      const mic = await micPermission();
      setHasPermission(cam && mic);
    })();
  }, []);

  const openCamera = () => {
    setShowCamera(true);
    setCapturedPhoto(null); // clear previous photo
  };

  const takePhoto = async () => {
    try {
      const photo = await cameraRef.current?.takePhoto();
      if (photo?.path) {
        setCapturedPhoto(`file://${photo.path}`);
        setShowCamera(false); // Hide camera after photo
      }
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };

  if (!hasPermission)
    return <Text style={styles.centerText}>Requesting permissions...</Text>;
  if (!device)
    return <Text style={styles.centerText}>No camera device available</Text>;

  return (
    <SafeAreaView style={styles.container}>
      {showCamera ? (
        <>
          <View style={styles.cameraWrapper}>
            <Camera
              ref={cameraRef}
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={true}
              photo={true}
            />
          </View>
          <View style={styles.controlsContainer}>
            <TouchableOpacity
              style={styles.shutterButton}
              onPress={takePhoto}
            />
            <TouchableOpacity
              style={styles.switchButton}
              onPress={() => setIsFrontCamera(!isFrontCamera)}>
              <Text style={styles.switchSymbol}>⟲</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.customButton} onPress={openCamera}>
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>
          {/* Photo Preview */}
          {capturedPhoto && (
            <View style={styles.preview}>
              <Image source={{uri: capturedPhoto}} style={styles.image} />
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  cameraWrapper: {
    flex: 1, // 80% height
  },
  centerText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  camera: {
    flex: 1,
  },
  buttons: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  preview: {
    alignItems: 'center',
    marginTop: 16,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  customButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 170,
  },

  shutterButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
  },

  switchButton: {
    position: 'absolute',
    right: 30,
  },

  switchSymbol: {
    color: 'white',
    fontSize: 50,
  },
  modeToggleContainer: {
    position: 'absolute',
    top: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },
  modeButton: {
    backgroundColor: '#222',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 20,
  },

  modeText: {
    color: '#fff',
    fontSize: 18,
    bottom: 3,
  },
  modeButtonActive: {
    backgroundColor: '#ff4444',
  },

  modeTextActive: {
    color: 'white',
  },
});

export default App;

{
  /* <View style={styles.controlsContainer}>
{/* <View style={styles.modeToggleContainer}>
  <TouchableOpacity
    style={[
      styles.modeButton,
      selectedMode === 'camera' && styles.modeButtonActive,
    ]}
    onPress={() => setSelectedMode('camera')}>
    <Text
      style={[
        styles.modeText,
        selectedMode === 'camera' && styles.modeTextActive,
      ]}>
      Camera
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      styles.modeButton,
      selectedMode === 'video' && styles.modeButtonActive,
    ]}
    onPress={() => setSelectedMode('video')}>
    <Text
      style={[
        styles.modeText,
        selectedMode === 'video' && styles.modeTextActive,
      ]}>
      Video
    </Text>
  </TouchableOpacity>
</View> */
}
{
  /* <TouchableOpacity
  style={styles.shutterButton}
  onPress={takePhoto}
/>
<TouchableOpacity
  style={styles.switchButton}
  onPress={() => setIsFrontCamera(!isFrontCamera)}>
  <Text style={styles.switchSymbol}>⟲</Text>
</TouchableOpacity>
</View> */
}
