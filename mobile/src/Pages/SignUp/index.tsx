import React from 'react';
import {ImageBackground} from 'react-native';

import GlobalStyles, {Container, ContainerButton} from '../GlobalStyles';

// components
import Title from '../Components/Title/Title';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import useContrast from '../Contexts/contrastContext';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {contrast} = useContrast();
  const navigation = useNavigation();

  const Create = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Container background={contrast} accessible={true}>
        <Title title={'Cadastro'} />
        <ContainerButton>
          <Input placeholder={'NOME: '} />
          <Input placeholder={'E-MAIL: '} />
          <Input placeholder={'SENHA: '} />
          <Input placeholder={'CONFIRME A SENHA: '} />
          <Input placeholder={'TELEFONE: '} />
          <Button title={'Salvar'} onPress={Create} />
        </ContainerButton>
      </Container>
    </ImageBackground>
  );
};

export default Home;
