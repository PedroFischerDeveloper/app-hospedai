import React, {useState} from 'react';
import {ImageBackground, ActivityIndicator, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Box,
  Description,
  Row,
  LogoDescription,
  Button,
  ButtonDescription,
  Divider
} from './styles';


import GlobalStyles, {Container} from '../GlobalStyles';
import useContrast from '../Contexts/contrastContext';
import useMainContext from '../Contexts/mainContext';

interface Provider {
  address: string;
  city: string;
  description: string;
  uf: string;
  stars: string;
  title: string;
}


const DescriptionComponent = (_props: Provider) => {
  const {contrast} = useContrast();
  const {main} = useMainContext();
  const [loading, setLoading] = useState<boolean>(false)

  console.log(main)
  const sendWhatssap = () => {
    setLoading(true);
    let message: string;
    message  = `Olá tudo bem?, eu vi o anúncio no aplicativo Hospedái e gostária de saber mais sobre o imóvel: ${main?.title}`;
    let link: string = `https://api.whatsapp.com/send?phone=5513997075155&text=${message}`;
    Linking.openURL(link);
    setLoading(false);
  };

  const sendEmail = async() => {


  };
  
  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Container background={contrast}>
        <Box contrast={contrast}>
          <LogoDescription
            contrast={contrast}
            source={require('../assets/Logo.png')}
          />
          <Description contrast={contrast}>{
            main?.stars.map((i: number) => (
            <Icon name="stars" key={i} size={40} color="gold"/>    
            ))
          }</Description>
          <Divider />
          <Description contrast={contrast}>Imóvel: {main?.title}</Description>
          
          <Description contrast={contrast}>Descrição: {main?.description}</Description>
          <Description contrast={contrast}>Endereço: {main?.address}</Description>
          <Divider />
          <Row>
            <Button contrast={contrast}>
              <ButtonDescription contrast={contrast} onPress={sendEmail}>E-mail</ButtonDescription>
            </Button>
            {
              loading ? <ActivityIndicator size={30} color="#252525" /> : <Button contrast={contrast}>
              <ButtonDescription contrast={contrast} onPress={sendWhatssap}>
                Whatssap
              </ButtonDescription>
            </Button>
            }

          </Row>
        </Box>
      </Container>
    </ImageBackground>
  );
};

export default DescriptionComponent;
