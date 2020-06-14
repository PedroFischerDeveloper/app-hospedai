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
import GlobalStyles from '../GlobalStyles';
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
      <Box>
        <LogoDescription
          source={require('../assets/Logo.jpeg')}
          width={'120px'}
          height={'120px'}
        />
        <TextTitle contrast={contrast}>{item.title}</TextTitle>
        <Description contrast={contrast}>{item.description}</Description>
        <Starts contrast={contrast}>Estrelas: {item.starts}</Starts>
        <Button>
          <ButtonDescription>Ver mais</ButtonDescription>
        </Button>
      </Box>
    </ImageBackground>
  );
};

export default Home;
