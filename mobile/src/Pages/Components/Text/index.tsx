import React from 'react';

import {Text} from './styles';
import useContrast from '../../Contexts/contrastContext';

interface IProps {
  title: string;
}

const TextComponent = (_props: IProps) => {
  const {contrast} = useContrast();
  return (
    <Text color={contrast} size={contrast}>
      {_props.title}
    </Text>
  );
};

export default TextComponent;
