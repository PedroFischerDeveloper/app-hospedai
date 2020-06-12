import React from 'react';
import {Switch} from 'react-native';
import {Container} from './styles';
import useContrast from '../../Contexts/contrastContext';

const Header: React.FC = () => {
  const {contrast, setContrast} = useContrast();

  return (
    <Container background={contrast}>
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
