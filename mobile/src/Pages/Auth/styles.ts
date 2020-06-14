import styled from 'styled-components/native';

interface Props {
  font: boolean;
  color: boolean;
}

export const ForgotButton = styled.TouchableOpacity`
  width: 200px;
  margin-top: 50px;
`;

export const TextForgot = styled.Text<Props>`
  font-size: ${(props: Props) => (props.font ? '20px' : '18px')};
  color: ${(props: Props) => (props.color ? '#fff' : '#000')};
  text-align: center;
`;
