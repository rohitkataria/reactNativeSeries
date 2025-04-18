import {Platform} from 'react-native';
import {
  PERMISSIONS,
  request,
  openSettings,
  RESULTS,
  Permission,
} from 'react-native-permissions';

type PermissionType =
  | 'camera'
  | 'mic'

const permissionMap: Record<PermissionType, {android: Permission; ios: Permission}> = {
  camera: {
    android: PERMISSIONS.ANDROID.CAMERA,
    ios: PERMISSIONS.IOS.CAMERA,
  },
  mic: {
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
    ios: PERMISSIONS.IOS.MICROPHONE,
  },
};

const getPermission = (type: PermissionType): Permission => {
  const platform = Platform.OS;
  if (platform === 'android' || platform === 'ios') {
    return permissionMap[type][platform];
  }
  throw new Error(`Unsupported platform: ${platform}`);
};


const requestPermission = async (type: PermissionType): Promise<boolean> => {
  try {
    const result = await request(getPermission(type));
    console.log(`${type} permission:`, result);

    if (result === RESULTS.GRANTED) return true;

    if (result === RESULTS.BLOCKED) {
      openSettings().catch(() =>
        console.warn(`Unable to open settings for ${type}`)
      );
    }

    return false;
  } catch (error) {
    console.error(`Error requesting ${type} permission:`, error);
    return false;
  }
};

// Export short aliases for individual permissions
export const cameraPermission = () => requestPermission('camera');
export const micPermission = () => requestPermission('mic');

// Or export generic handler if you prefer
export {requestPermission};
