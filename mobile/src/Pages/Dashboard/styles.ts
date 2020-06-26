import styled from 'styled-components/native';

interface Props {
  background: boolean;
  contrast: boolean;
  colorButton: boolean;
}
export const DescriptionProfile = styled.Text<Props>`
  display: flex;
  width: 100%;
  padding: 20px 0 0 30px;
  align-self: center;
  color: ${(props: Props) => (props.contrast ? '#fff' : '#73224f')};
  background: ${(props: Props) => (props.contrast ? '#000' : 'transparent')};
  font-size: 20px;
  font-weight: bold;
`;
export const Box = styled.View<Props>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid
    ${(props: Props) => (props.contrast ? 'transparent' : '#73224f')};
  margin-top: 10px;
  background: ${(props: Props) => (props.contrast ? '#000' : 'transparent')};
`;
export const Row = styled.View<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Description = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? '#fff' : '#a0a0a0')};
  font-size: ${(props: Props) => (props.contrast ? '20px' : '18px')};
  margin-left: 0px;
  padding: 20px 10px 0 10px;
  max-width: 250px;
  text-align: center;
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
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px;
  width: 90%;
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
