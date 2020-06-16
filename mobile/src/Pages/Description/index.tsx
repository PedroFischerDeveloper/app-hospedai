import React from 'react';
import {ImageBackground} from 'react-native';

import {
  Box,
  TextTitle,
  Description,
  Row,
  LogoDescription,
  Button,
  ButtonDescription,
  Starts,
} from './styles';
import GlobalStyles, {Container} from '../GlobalStyles';
// components
import useContrast from '../Contexts/contrastContext';
import {useRoute} from '@react-navigation/native';

const Home = () => {
  const {contrast} = useContrast();
  const route = useRoute();
  let {item} = route.params;
  console.log(item);
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
          <Description contrast={contrast}>
            Descrição: {item.description}
          </Description>
          <Description contrast={contrast}>
            Endereço: {item.address}. {item.city}/{item.uf}
          </Description>
          <Description contrast={contrast}>
            Avaliação: {item.starts}
          </Description>
          <Row>
            <Button contrast={contrast}>
              <ButtonDescription contrast={contrast}>E-mail</ButtonDescription>
            </Button>
            <Button contrast={contrast}>
              <ButtonDescription contrast={contrast}>
                Whatssap
              </ButtonDescription>
            </Button>
          </Row>
        </Box>
      </Container>
    </ImageBackground>
  );
};

export default Home;
