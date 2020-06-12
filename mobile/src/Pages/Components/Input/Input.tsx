import React from 'react';
import {Input} from './style';
import useContrast from '../../Contexts/contrastContext';

interface IProps {
  placeholder: string;
}

const InputComponent = (_props: IProps) => {
  const {contrast} = useContrast();
  return (
    <Input
      placeholder={_props.placeholder}
      placeholderTextColor={contrast ? '#fff' : '#73224f'}
      background={contrast}
      border={contrast}
      font={contrast}
      height={contrast}
    />
  );
};

export default InputComponent;
