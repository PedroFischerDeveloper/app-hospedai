import React from 'react';
import {Text} from './styles';

import useContrast from '../../Contexts/contrastContext';

interface IProps {
  title: string;
}

const Title = (_props: IProps) => {
  const {contrast} = useContrast();
  return (
    <Text size={contrast} color={contrast}>
      {_props.title}
    </Text>
  );
};

export default Title;
