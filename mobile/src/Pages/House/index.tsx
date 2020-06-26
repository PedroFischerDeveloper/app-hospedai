import React, {useState} from 'react';
import {ImageBackground, KeyboardAvoidingView} from 'react-native';
import Header from '../Components/HeaderExternal/Header';
import GlobalStyles, {HouseImage, UploadButton, Scroll} from '../GlobalStyles';
import {normalAlert} from '../Alert';
import {TextInputMask} from 'react-native-masked-text';

import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import TextArea from '../Components/TextArea/TextArea';
import useContrast from '../Contexts/contrastContext';

const Houses = () => {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const {contrast} = useContrast();

  const Create = () => {
    if (!name) {
      normalAlert('Ops... :(', 'Campo nome é obrigatório');
      return false;
    } else if (!password) {
      normalAlert('Ops... :(', 'Campo senha é obrigatório');
      return false;
    } else if (!phone) {
      normalAlert('Ops... :(', 'Campo telefone é obrigatório');
      return false;
    }
  };

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Header />
      <Scroll background={contrast} accessible={true}>
        <KeyboardAvoidingView>
          <UploadButton>
            <HouseImage source={require('../assets/Logo.jpeg')} />
          </UploadButton>
          <Input
            placeholder={'Titulo'}
            onChangeText={e => setName(e)}
            isPassword={false}
          />
          <TextArea
            placeholder={'Descrição'}
            onChangeText={e => setPassword(e)}
            isPassword={false}
          />
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            placeholder={'Contato'}
            placeholderTextColor={contrast ? '#fff' : '#73224f'}
            onChangeText={(e: string) => setPhone(e)}
            value={phone}
            style={
              contrast
                ? GlobalStyles.inputMaskedAutoContrast
                : GlobalStyles.inputMasked
            }
          />
          <Button title={'Salvar'} onPress={Create} />
        </KeyboardAvoidingView>
      </Scroll>
    </ImageBackground>
  );
};

export default Houses;
