import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  background: boolean;
  width: string;
  height: string;
  margin: string;
};
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 30px;
  background-color: ${(props: Props) =>
    props.background ? '#000' : 'transparent'};
`;
export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 30px 10px 30px 10px;
  background-color: ${(props: Props) =>
    props.background ? '#000' : 'transparent'};
`;
export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const Logo = styled.ImageBackground<Props>`
  display: flex;
  width: ${(props: Props) => (props.width ? props.width : '60%;')};
  height: 30%;
  margin: 10px auto 10px auto;
  background: ${(props: Props) => (props.background ? '#fff' : 'transparent')};
`;

export const ProfileImage = styled.ImageBackground<Props>`
  display: flex;
  width: 160px;
  height: 160px;
  border: 2px solid #73224f;
  border-radius: 80px;
  margin: 0px auto 20px auto;
  background: ${(props: Props) => (props.background ? '#000' : '#000')};
`;

export const HouseImage = styled.ImageBackground<Props>`
  display: flex;
  width: 250px;
  height: 250px;
  border: 2px solid #73224f;
  border-radius: 10px;
  margin: 20px auto 20px auto;
  background: ${(props: Props) => (props.background ? '#000' : '#000')};
`;

export const UploadButton = styled.TouchableOpacity<{background: boolean}>`
  display: flex;
`;

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputMasked: {
    height: 60,
    borderColor: '#73224f',
    color: '#73224f',
    borderWidth: 2,
    width: '100%',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    padding: 20,
  },
  inputMaskedAutoContrast: {
    height: 60,
    borderColor: '#fff',
    backgroundColor: '#252525',
    color: '#fff',
    borderWidth: 3,
    width: '100%',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    padding: 20,
  },
});
export default GlobalStyles;
