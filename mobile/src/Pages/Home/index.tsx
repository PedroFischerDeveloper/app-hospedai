import React from 'react';
import {ImageBackground} from 'react-native';

import GlobalStyles, {Container, ContainerButton, Logo} from '../GlobalStyles';

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
      <Logo source={require('../assets/Logo.jpeg')} />
      <Container background={contrast} accessible={true}>
        <Title title={'Seja bem vindo'} />
        <ContainerButton>
          <Button title={'Entrar'} onPress={Login} />
          <Button title={'Cadastrar'} onPress={Create} />
        </ContainerButton>
      </Container>
    </ImageBackground>
  );
};

export default Home;
