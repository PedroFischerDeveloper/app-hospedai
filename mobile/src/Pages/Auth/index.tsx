import React from 'react';
import {ImageBackground} from 'react-native';

import GlobalStyles, {Container, ContainerButton} from '../GlobalStyles';

// components
import Title from '../Components/Title/Title';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import useContrast from '../Contexts/contrastContext';

const Login = () => {
  const {contrast} = useContrast();

  const Login = () => {
    console.log('');
  };

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Container background={contrast} accessible={true}>
        <Title title={'Login'} />
        <ContainerButton>
          <Input placeholder={'E-MAIL: '} />
          <Input placeholder={'SENHA: '} />
          <Button title={'Logar'} onPress={Login} />
        </ContainerButton>
      </Container>
    </ImageBackground>
  );
};

export default Login;
