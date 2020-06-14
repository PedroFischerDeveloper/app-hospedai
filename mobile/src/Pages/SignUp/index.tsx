import React, {useState} from 'react';
import {ImageBackground} from 'react-native';

import GlobalStyles, {Container, ContainerButton} from '../GlobalStyles';

import {errorToast} from '../toast/toast';

// components
import Title from '../Components/Title/Title';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import useContrast from '../Contexts/contrastContext';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confPassword, setConfPassword] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const {contrast} = useContrast();
  const navigation = useNavigation();

  const Create = () => {
    if (!name) {
      errorToast('ERROR: O CAMPO NOME NÃO DEVE FICAR EM BRANCO');
      setHasError(true);
      return false;
    } else if (!email) {
      errorToast('ERROR: O CAMPO DE EMAIL NÃO DEVE FICAR EM BRANCO');
      setHasError(true);
    } else if (!password) {
      errorToast('ERROR: O CAMPO DE SENHA NÃO DEVE FICAR EM BRANCO');
      setHasError(true);
    } else if (!password !== confPassword) {
      errorToast('ERROR: SENHA E CONFIRMAÇÃO DE SENHA NÃO CORRESPONDEM');
      setHasError(true);
    } else if (!phone) {
      errorToast('ERROR: O CAMPO DE TELEFONE NÃO DEVE FICAR EM BRANCO');
      setHasError(true);
    } else {
      setHasError(false);
    }

    if (hasError) {
      return false;
    }

    navigation.navigate('Auth');
  };

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Container background={contrast} accessible={true}>
        <Title title={'Cadastro'} />
        <ContainerButton>
          <Input
            placeholder={'NOME: '}
            onChangeText={e => setName(e)}
            isPassword={false}
          />
          <Input
            placeholder={'E-MAIL: '}
            onChangeText={e => setEmail(e)}
            isPassword={false}
          />
          <Input
            placeholder={'SENHA: '}
            onChangeText={e => setPassword(e)}
            isPassword={true}
          />
          <Input
            placeholder={'CONFIRME A SENHA: '}
            onChangeText={e => setConfPassword(e)}
            isPassword={true}
          />
          <Input
            placeholder={'TELEFONE: '}
            isPassword={false}
            onChangeText={e => setPhone(e)}
          />
          <Button title={'Salvar'} onPress={Create} />
        </ContainerButton>
      </Container>
    </ImageBackground>
  );
};

export default Home;
