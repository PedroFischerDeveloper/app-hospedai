import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

type ContainerBackgroundColorProps = {
  background: boolean;
};
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: ContainerBackgroundColorProps) =>
    props.background ? '#252525' : 'transparent'};
`;
export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default GlobalStyles;
