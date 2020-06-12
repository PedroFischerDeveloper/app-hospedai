import React from 'react';

import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  ToastAndroid,
} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import GlobalStyles from '../GlobalStyles';

// components
import Title from '../Components/Title/Title';
import Input from '../Components/Input/Input';

const Auth = () => {
  const navigation = useNavigation();

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Enviamos um e-mail com link de recuperação',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  };

  function handleNavigation() {
    navigation.navigate('Auth');
    showToastWithGravity();
  }
  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <View style={styles.container} accessible={true}>
        <Title title={'Recuperar senha'} />
        <View style={styles.containerButton}>
          <Input title={'Digite seu e-mail'} />
          <RectButton style={styles.button}>
            <Text style={styles.text} onPress={handleNavigation}>
              Enviar
            </Text>
          </RectButton>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 4,
    textAlign: 'center',
  },
  textEsqueceu: {
    color: '#73224F',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 4,
    textAlign: 'center',
  },
  button: {
    padding: 20,
    width: 400,
    marginTop: 50,
    borderRadius: 5,
    backgroundColor: '#73224F',
  },
  buttonEsqueceu: {
    padding: 20,
    width: 400,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
});
export default Auth;
