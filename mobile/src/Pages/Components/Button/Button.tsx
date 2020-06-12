import React from 'react';

import {Button} from './styles';
import Text from '../Text/index';
import useContrast from '../../Contexts/contrastContext';

interface IProps {
  title: string;
  onPress: () => void;
}

const ButtonComponent = (_props: IProps) => {
  const {contrast} = useContrast();
  return (
    <Button background={contrast} onPress={_props.onPress}>
      <Text title={_props.title} />
    </Button>
  );
};
export default ButtonComponent;
