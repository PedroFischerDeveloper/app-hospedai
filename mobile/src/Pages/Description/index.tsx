import React from 'react';
import {ImageBackground} from 'react-native';

import GlobalStyles, {Container, ContainerButton} from '../GlobalStyles';
import {Box, Description} from './styles';

// components
import Title from '../Components/Title/Title';
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
      <Container background={contrast} accessible={true}>
        <Title title={item.title} />
        <Box>
          <Description contrast={contrast}>{item.description}</Description>
        </Box>
        <Box>
          <Description contrast={contrast}>
            Endereço: {item.address} Cidade: {item.city} / UF: {item.uf}
          </Description>
        </Box>
        <Box>
          <Description contrast={contrast}>
            Cidade: {item.city} / UF: {item.uf}
          </Description>
        </Box>
        <ContainerButton />
      </Container>
    </ImageBackground>
  );
};

export default Home;
