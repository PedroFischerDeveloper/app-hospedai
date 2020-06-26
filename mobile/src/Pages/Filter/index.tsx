import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import Header from '../Components/HeaderExternal/Header';
import GlobalStyles from '../GlobalStyles';
import {Row, Title, Button, TextButton} from './style';
import CheckBox from '@react-native-community/checkbox';
import useContrast from '../Contexts/contrastContext';

const Profile = () => {
  const {contrast} = useContrast();
  const [ap, setAp] = useState<Boolean>(false);
  const [house, setHouse] = useState<Boolean>(false);
  const [hostel, setHostel] = useState<Boolean>(false);

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Header />
      <Title constrat={contrast}>Selecione os filtros para busca</Title>
      <Row constrat={contrast}>
        <Title constrat={contrast}>Apartamento</Title>
        <CheckBox
          disabled={false}
          value={ap}
          onValueChange={() => (ap ? setAp(false) : setAp(true))}
        />
        <Title>Casa</Title>
        <CheckBox
          disabled={false}
          value={house}
          onValueChange={() => (house ? setHouse(false) : setHouse(true))}
        />
        <Title>Hostel</Title>
        <CheckBox
          disabled={false}
          value={hostel}
          onValueChange={() => (hostel ? setHostel(false) : setHostel(true))}
        />
      </Row>
      <Button constrat={contrast}>
        <TextButton constrat={contrast}>Salvar</TextButton>
      </Button>
    </ImageBackground>
  );
};

export default Profile;
