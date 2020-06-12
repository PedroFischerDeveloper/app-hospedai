import styled from 'styled-components/native';
import {ViewProps} from 'react-native';

interface AutoContrast extends ViewProps {
  background: string;
}

export const Container = styled.View`
  height: 60px;
  background: ${(props: AutoContrast) =>
    props.background ? '#252525' : '#73224f'};
  align-items: flex-end;
  justify-content: center;
  border-color: ${(props: AutoContrast) =>
    props.background ? '#fff' : '#73224f'};
  border-width: ${(props: AutoContrast) => (props.background ? '2px' : '0px')};
`;
