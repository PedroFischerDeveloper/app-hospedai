import styled from 'styled-components/native';

interface Props {
  background: boolean;
  contrast: boolean;
  colorButton: boolean;
}
export const Box = styled.View<Props>`
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  background: ${(props: Props) => (props.background ? '#444' : 'transparent')};
`;
export const RowButton = styled.View<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TextTitle = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? '#fff' : '#73224f')};
  font-size: ${(props: Props) => (props.contrast ? '32px' : '28px')};
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`;
export const Description = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? '#fff' : '#73224f')};
  font-size: ${(props: Props) => (props.contrast ? '25px' : '20px')};
  margin-bottom: 50px;
  text-align: center;
  margin-top: 20px;
  letter-spacing: 2px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity<Props>`
  padding: 10px;
  border-radius: 5px;
  margin-left: 2px;
  margin-right: 2px;
  flex: 1;
  background: ${(props: Props) => (props.contrast ? 'transparent' : 'green')};
`;

export const ButtonDescription = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? 'yellow' : '#fff')};
  font-weight: ${(props: Props) => (props.contrast ? 'bold' : 'normal')};
  font-size: ${(props: Props) => (props.contrast ? '25px' : '16px')};
  text-align: center;
`;
