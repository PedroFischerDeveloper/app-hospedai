import React from 'react';
import {Switch} from 'react-native';
import {Container} from './styles';
import useContrast from '../../Contexts/contrastContext';

const Header = () => {
  const {contrast, setContrast} = useContrast();

  return (
    <Container contrast={contrast}>
      <Switch
        trackColor={{false: '#333', true: '#fff'}}
        ios_backgroundColor="#73224f"
        onValueChange={setContrast}
        value={contrast}
      />
    </Container>
  );
};

export default Header;
