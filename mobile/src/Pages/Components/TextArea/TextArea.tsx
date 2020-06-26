import React from 'react';
import {Input} from './style';
import useContrast from '../../Contexts/contrastContext';

interface IProps {
  placeholder: string;
  isPassword: boolean;
  onChangeText: (value: any) => void;
}

const InputComponent = (_props: IProps) => {
  const {contrast} = useContrast();
  return (
    <Input
      placeholder={_props.placeholder}
      placeholderTextColor={contrast ? '#fff' : '#73224f'}
      background={contrast}
      border={contrast}
      autoComplete={true}
      font={contrast}
      numberOfLines={10}
      maxLength={500}
      multiline={true}
      onChangeText={_props.onChangeText}
    />
  );
};

export default InputComponent;
