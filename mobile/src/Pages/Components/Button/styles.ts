import styled from 'styled-components/native';

type Props = {
  background: boolean;
};

export const Button = styled.TouchableOpacity<{background: boolean}>`
  padding: 20px;
  width: 400px;
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: ${(props: Props) =>
    props.background ? '#333' : '#73224f'};
`;
