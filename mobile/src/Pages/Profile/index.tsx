import React, {useState} from 'react';
import {ImageBackground, KeyboardAvoidingView} from 'react-native';
import Header from '../Components/HeaderExternal/Header';
import GlobalStyles, {
  ProfileImage,
  Scroll,
  UploadButton,
} from '../GlobalStyles';
import {normalAlert} from '../Alert';
import {TextInputMask} from 'react-native-masked-text';

import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import useContrast from '../Contexts/contrastContext';

const Profile = () => {
  const [email, setEmail] = useState('pedro.fischer22@gmail.com');
  const [password, setPassword] = useState('******');
  const [name, setName] = useState('Pedro Fischer');
  const [phone, setPhone] = useState('(13) 99707-5155');

  const {contrast} = useContrast();

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
  };

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Header />
      <Scroll background={contrast} accessible={true}>
        <KeyboardAvoidingView>
          <UploadButton>
            <ProfileImage source={require('../assets/Profile.png')} />
          </UploadButton>
          <Input
            placeholder={name}
            onChangeText={e => setName(e)}
            isPassword={false}
          />
          <Input
            placeholder={email}
            onChangeText={e => setEmail(e)}
            isPassword={false}
          />
          <Input
            placeholder={password}
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
            placeholder={phone}
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
      </Scroll>
    </ImageBackground>
  );
};

export default Profile;
