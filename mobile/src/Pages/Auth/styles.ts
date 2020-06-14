import styled from 'styled-components/native';

interface Props {
  font: boolean;
  color: boolean;
}

export const ForgotButton = styled.TouchableOpacity`
  width: 200px;
  margin-top: 5px;
`;

export const TextForgot = styled.Text<Props>`
  font-size: ${(props: Props) => (props.font ? '18px' : '16px')};
  color: ${(props: Props) => (props.color ? '#fff' : '#73224f')};
  text-align: center;
  font-weight: bold;
`;
