import styled from 'styled-components/native';

interface Props {
  background: boolean;
  contrast: boolean;
  colorButton: boolean;
}
export const Box = styled.View<Props>`
  display: flex;
  width: 430px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  border: 1px solid ${(props: Props) => (props.contrast ? '#000' : '#73224f')};
  border-radius: 5px;
  background: ${(props: Props) => (props.contrast ? '#000' : 'transparent')};
`;
export const Description = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? '#fff' : '#a2a2a2')};
  font-size: ${(props: Props) => (props.contrast ? '20px' : '18px')};
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: justify;
`;
export const LogoDescription = styled.ImageBackground`
  margin-top: 10px;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  margin-bottom: 60px;
  background: ${(props: Props) => (props.contrast ? '#fff' : 'transparent')};
`;
export const Button = styled.TouchableOpacity<Props>`
  width: 40%;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
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
