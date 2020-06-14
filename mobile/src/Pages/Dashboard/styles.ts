import styled from 'styled-components/native';

interface Props {
  background: boolean;
  contrast: boolean;
  colorButton: boolean;
}
export const Box = styled.View<Props>`
  display: flex;
  justify-content: space-between;
  border: 1px solid #73224f;
  margin-top: 15px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${(props: Props) => (props.background ? '#444' : 'transparent')};
`;
export const Row = styled.View<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TextTitle = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? '#fff' : '#73224f')};
  font-size: ${(props: Props) => (props.contrast ? '28px' : '25px')};
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
`;
export const Description = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? '#fff' : '#73224f')};
  font-size: ${(props: Props) => (props.contrast ? '20px' : '16px')};
  margin-left: 20px;
  max-width: 300px;
  letter-spacing: 1px;
  font-weight: bold;
`;
export const LogoDescription = styled.ImageBackground`
  margin-top: 10px;
  width: 80px;
  height: 80px;
`;
export const Starts = styled.Text`
  display: flex;
  align-self: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  color: ${(props: Props) => (props.contrast ? '#fff' : '#73224f')};
`;
export const Button = styled.TouchableOpacity<Props>`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  background: ${(props: Props) => (props.contrast ? 'transparent' : 'green')};
`;
export const ButtonDescription = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? 'yellow' : '#fff')};
  font-weight: ${(props: Props) => (props.contrast ? 'bold' : 'normal')};
  font-size: ${(props: Props) => (props.contrast ? '25px' : '16px')};
  text-align: center;
`;
