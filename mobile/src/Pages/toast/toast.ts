import {ToastAndroid} from 'react-native';

export const messageToast = (error: string) => {
  ToastAndroid.showWithGravity(error, ToastAndroid.LONG, ToastAndroid.CENTER);
};
export const errorToast = (error: string) => {
  ToastAndroid.showWithGravity(error, ToastAndroid.LONG, ToastAndroid.TOP);
};
