import styled from 'styled-components/native';

interface Props {
  background: boolean;
  contrast: boolean;
  colorButton: boolean;
}
export const Box = styled.ScrollView<Props>`
  flex: 1;
  padding: 20px;
  background-color: ${(props: Props) =>
    props.background ? '#000' : 'transparent'};
`;
export const Description = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? '#fff' : '#a2a2a2')};
  font-size: ${(props: Props) => (props.contrast ? '20px' : '18px')};
  margin-bottom: 5px;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: justify;
`;
export const Divider = styled.View`
  width: 100%;
  padding: 1px;
  margin: 5px 0;
  opacity: 1;
  background: #ccc;
`;
export const LogoDescription = styled.ImageBackground`
  display: flex;
  align-self: center;
  width: 200px;
  height: 200px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  background: ${(props: Props) => (props.contrast ? '#fff' : 'transparent')};
`;
export const Button = styled.TouchableOpacity<Props>`
  width: 45%;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 15px;
  border-radius: 5px;
  background: ${(props: Props) => (props.contrast ? 'transparent' : '#73224f')};
`;
export const ButtonDescription = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? 'yellow' : '#fff')};
  font-weight: ${(props: Props) => (props.contrast ? 'bold' : 'normal')};
  font-size: ${(props: Props) => (props.contrast ? '25px' : '16px')};
  text-align: center;
`;
export const Row = styled.View<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
