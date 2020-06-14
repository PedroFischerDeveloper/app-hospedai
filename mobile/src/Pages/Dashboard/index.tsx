import React from 'react';
import {ImageBackground, FlatList} from 'react-native';

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
import {useNavigation} from '@react-navigation/native';

const object: {
  id: number;
  title: string;
  starts: number;
  description: string;
  address: string;
  city: string;
  uf: string;
}[] = [
  {
    id: 0,
    title: 'Casa',
    starts: 5,
    description:
      'Um imóvel, em geral, possui amplo espaço para o lazer de toda a família.Um imóvel, em geral, possui amplo espaço para olazer de toda a família.Um imóvel, em geral, possui amploespaço para o lazer de toda a família.',
    address: 'Rua Alagoas, 250, Jardin Rio Branco',
    city: 'São Vicente',
    uf: 'SP',
  },
  {
    id: 1,
    title: 'Casa',
    starts: 5,
    description:
      'Um imóvel, em geral, possui amplo espaço para o lazer de toda a família.Um imóvel, em geral, possui amplo espaço para olazer de toda a família.Um imóvel, em geral, possui amploespaço para o lazer de toda a família.',
    address: 'Rua Alagoas, 250, Jardin Rio Branco',
    city: 'São Vicente',
    uf: 'SP',
  },
  {
    id: 2,
    title: 'Casa',
    starts: 5,
    description:
      'Um imóvel, em geral, possui amplo espaço para o lazer de toda a família.Um imóvel, em geral, possui amplo espaço para olazer de toda a família.Um imóvel, em geral, possui amploespaço para o lazer de toda a família.',
    address: 'Rua Alagoas, 250, Jardin Rio Branco',
    city: 'São Vicente',
    uf: 'SP',
  },
  {
    id: 3,
    title: 'Casa',
    starts: 5,
    description:
      'Um imóvel, em geral, possui amplo espaço para o lazer de toda a família.Um imóvel, em geral, possui amplo espaço para olazer de toda a família.Um imóvel, em geral, possui amploespaço para o lazer de toda a família.',
    address: 'Rua Alagoas, 250, Jardin Rio Branco',
    city: 'São Vicente',
    uf: 'SP',
  },
];

const Home = () => {
  const {contrast} = useContrast();
  const navigation = useNavigation();

  const description = (item: object) => {
    console.log(item);
    navigation.navigate('Description', {item});
  };

  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <Container background={contrast} accessible={true}>
        <FlatList
          data={object}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item: i}) => (
            <Box>
              <TextTitle contrast={contrast}>{i.title}</TextTitle>
              <Row>
                <LogoDescription
                  source={require('../assets/Logo.jpeg')}
                  width={'120px'}
                  height={'120px'}
                />
                <Description contrast={contrast}>{i.description}</Description>
              </Row>
              <Starts contrast={contrast}>Estrelas: {i.starts}</Starts>
              <Button onPress={() => description(i)}>
                <ButtonDescription>Ver mais</ButtonDescription>
              </Button>
            </Box>
          )}
        />
      </Container>
    </ImageBackground>
  );
};

export default Home;
