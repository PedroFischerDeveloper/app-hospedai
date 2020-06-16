import styled from 'styled-components/native';

interface Props {
  background: boolean;
  contrast: boolean;
  colorButton: boolean;
}
export const Box = styled.View<Props>`
  display: flex;
  justify-content: space-between;
  border: 1px solid
    ${(props: Props) => (props.contrast ? 'transparent' : '#73224f')};
  margin-top: 10px;
  background: ${(props: Props) => (props.contrast ? '#000' : 'transparent')};
`;
export const Row = styled.View<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
`;
export const Description = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? '#fff' : '#a2a2a2')};
  font-size: ${(props: Props) => (props.contrast ? '20px' : '18px')};
  margin-left: 5px;
  padding: 20px;
  max-width: 300px;
  text-align: justify;
  font-weight: bold;
  letter-spacing: 1px;
`;
export const LogoDescription = styled.ImageBackground`
  margin-top: 30px;
  padding-left: 25px;
  width: 100px;
  height: 100px;
  background: ${(props: Props) => (props.background ? '#fff' : 'transparent')};
`;
export const Button = styled.TouchableOpacity<Props>`
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 10px;
  width: 95%;
  align-self: center;
  border-radius: 5px;
  background: ${(props: Props) => (props.contrast ? 'transparent' : '#73224f')};
`;
export const ButtonDescription = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? 'yellow' : '#fff')};
  font-weight: bold;
  font-size: ${(props: Props) => (props.contrast ? '25px' : '16px')};
  text-align: center;
`;
