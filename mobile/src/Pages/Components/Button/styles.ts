import styled from 'styled-components/native';

type BottomColorProps = {
  background: boolean;
};
export const Button = styled.TouchableOpacity`
  padding: 20px;
  width: 400px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: ${(props: BottomColorProps) =>
    props.background ? '#333' : '#73224f'};
`;
