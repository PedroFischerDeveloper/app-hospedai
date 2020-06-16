import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  background: boolean;
  width: string;
  height: string;
  margin: string;
};
export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: ${(props: Props) =>
    props.background ? '#000' : 'transparent'};
`;
export const Container = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props: Props) =>
    props.background ? '#000' : 'transparent'};
`;
export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const Logo = styled.ImageBackground<Props>`
  display: flex;
  width: ${(props: Props) => (props.width ? props.width : '60%;')};
  height: 30%;
  margin: 10px auto;
  justify-content: center;
  align-self: center;
  background: ${(props: Props) => (props.background ? '#fff' : 'transparent')};
`;

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default GlobalStyles;
