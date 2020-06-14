import React, {useState} from 'react';
import {ImageBackground} from 'react-native';

import GlobalStyles, {Container, ContainerButton} from '../GlobalStyles';

import {errorToast, messageToast} from '../toast/toast';

// components
import Title from '../Components/Title/Title';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import useContrast from '../Contexts/contrastContext';
import {useNavigation} from '@react-navigation/native';

interface Props {
  email: string;
}

const Login = (_props: Props) => {
  const [email, setEmail] = useState('');
  const {contrast} = useContrast();
  const navigation = useNavigation();

  const Forgot = () => {
    if (!email) {
      errorToast('ERROR: O CAMPO DE E-MAIL NÃO DEVE FICAR EM BRANCO:');
      return false;
    }
    navigation.navigate('Forgot');
    messageToast('ENVIAMOS UM LINK PARA SEU E-MAIL:');
  };

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Container background={contrast} accessible={true}>
        <Title title={'Recupera senha'} />
        <ContainerButton>
          <Input
            placeholder={'INSIRA SEU E-MAIL: '}
            onChangeText={e => setEmail(e)}
          />
          <Button title={'Enviar'} onPress={Forgot} />
        </ContainerButton>
      </Container>
    </ImageBackground>
  );
};

export default Login;
