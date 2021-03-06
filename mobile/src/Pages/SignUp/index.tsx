import React, {useState} from 'react';
import {ImageBackground, KeyboardAvoidingView} from 'react-native';
import Header from '../Components/HeaderExternal/Header';
import GlobalStyles, {Container, Logo} from '../GlobalStyles';
import {normalAlert} from '../Alert';
import {TextInputMask} from 'react-native-masked-text';

// components
import Title from '../Components/Title/Title';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import useContrast from '../Contexts/contrastContext';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const {contrast} = useContrast();
  const navigation = useNavigation();

  const Create = () => {
    if (!name) {
      normalAlert('Ops... :(', 'Campo nome é obrigatório');
      return false;
    } else if (!email) {
      normalAlert('Ops... :(', 'Campo e-mail é obrigatório');
      return false;
    } else if (!password) {
      normalAlert('Ops... :(', 'Campo senha é obrigatório');
      return false;
    } else if (!phone) {
      normalAlert('Ops... :(', 'Campo telefone é obrigatório');
      return false;
    }
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Header />
      <Container background={contrast} accessible={true}>
        <KeyboardAvoidingView>
          <Logo background={contrast} source={require('../assets/Logo.png')} />
          <Title title={'Cadastro'} />
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
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            placeholder={'TELEFONE: '}
            value={phone}
            placeholderTextColor={contrast ? '#fff' : '#73224f'}
            onChangeText={(e: string) => setPhone(e)}
            style={
              contrast
                ? GlobalStyles.inputMaskedAutoContrast
                : GlobalStyles.inputMasked
            }
          />
          <Button title={'Salvar'} onPress={Create} />
        </KeyboardAvoidingView>
      </Container>
    </ImageBackground>
  );
};

export default Home;
