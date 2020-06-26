import React, {useState} from 'react';
import {ImageBackground, KeyboardAvoidingView} from 'react-native';
import Header from '../Components/HeaderExternal/Header';
import GlobalStyles, {Container, Logo} from '../GlobalStyles';
import {ForgotButton, TextForgot} from './styles';

import {normalAlert} from '../Alert';

// components
import Title from '../Components/Title/Title';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import useContrast from '../Contexts/contrastContext';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {contrast} = useContrast();
  const navigation = useNavigation();

  const Auth = () => {
    if (!email) {
      normalAlert('Opss...', 'Campo e-mail é obrigatório');
      return false;
    }

    if (!password) {
      normalAlert('Opss...', 'Campo e-mail é obrigatório');
      return false;
    }
    navigation.navigate('Home');
  };

  const Forgot = () => {
    navigation.navigate('Forgot');
  };

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Header />
      <Container background={contrast} accessible={true}>
        <KeyboardAvoidingView>
          <Logo background={contrast} source={require('../assets/Logo.png')} />
          <Title title={'Login'} />
          <Input
            placeholder={'E-MAIL: '}
            onChangeText={setEmail}
            isPassword={false}
          />
          <Input
            placeholder={'SENHA: '}
            onChangeText={setPassword}
            isPassword={true}
          />
          <Button title={'Logar'} onPress={Auth} />

          <ForgotButton onPress={Forgot}>
            <TextForgot font={contrast} color={contrast}>
              Esqueceu a senha ?
            </TextForgot>
          </ForgotButton>
        </KeyboardAvoidingView>
      </Container>
    </ImageBackground>
  );
};

export default Login;
