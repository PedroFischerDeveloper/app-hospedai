import {Alert} from 'react-native';
export const normalAlert = (msgTitle: string, msgAlert: string) =>
  Alert.alert(msgTitle, msgAlert);
