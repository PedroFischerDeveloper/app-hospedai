import React from 'react';
import {ImageBackground} from 'react-native';
import Header from '../Components/HeaderExternal/Header';
import GlobalStyles, {Container, Logo} from '../GlobalStyles';

// components
import Title from '../Components/Title/Title';
import Button from '../Components/Button/Button';
import useContrast from '../Contexts/contrastContext';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {contrast} = useContrast();
  const navigation = useNavigation();

  const Login = () => {
    navigation.navigate('Auth');
  };

  const Create = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Header />
      <Container background={contrast} accessible={true}>
        <Logo background={contrast} source={require('../assets/Logo.png')} />
        <Title title={'Seja bem vindo'} />
        <Button title={'Entrar'} onPress={Login} />
        <Button title={'Cadastrar'} onPress={Create} />
      </Container>
    </ImageBackground>
  );
};

export default Home;
