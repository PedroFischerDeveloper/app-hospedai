import styled from 'styled-components/native';

interface Props {
  font: boolean;
  color: boolean;
}
export const ForgotButton = styled.TouchableOpacity`
  width: 100%;
  margin: 10px 0 15px 0;
`;
export const TextForgot = styled.Text<Props>`
  font-size: ${(props: Props) => (props.font ? '22px' : '18px')};
  color: ${(props: Props) => (props.color ? '#fff' : '#73224f')};
  text-align: center;
  font-weight: bold;
`;
