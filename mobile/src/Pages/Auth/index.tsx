import React, {useState} from 'react';
import {ImageBackground} from 'react-native';

import GlobalStyles, {Container, ContainerButton, Logo} from '../GlobalStyles';
import {ForgotButton, TextForgot} from './styles';

import {errorToast} from '../toast/toast';

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
      errorToast('ERROR: O E-MAIL NÃO PODE FICAR EM BRANCO!');
      return false;
    }

    if (!password) {
      errorToast('ERROR: A SENHA NÃO PODE FICAR EM BRANCO!');
      return false;
    }
    navigation.navigate('Dashboard');
  };

  const Forgot = () => {
    navigation.navigate('Forgot');
  };

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Logo
        width={'50%'}
        height={'25%'}
        margin={'auto'}
        source={require('../assets/Logo.jpeg')}
      />
      <Container background={contrast} accessible={true}>
        <Title title={'Login'} />
        <ContainerButton>
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
        </ContainerButton>
        <ForgotButton onPress={Forgot}>
          <TextForgot font={contrast} color={contrast}>
            Esqueceu a senha ?
          </TextForgot>
        </ForgotButton>
      </Container>
    </ImageBackground>
  );
};

export default Login;
