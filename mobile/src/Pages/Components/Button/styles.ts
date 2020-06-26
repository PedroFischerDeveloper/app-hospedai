import styled from 'styled-components/native';

type Props = {
  background: boolean;
};

export const Button = styled.TouchableOpacity<{background: boolean}>`
  padding: 20px 0 20px 0;
  width: 100%;
  margin: 5px 0 20px 0;
  border-radius: 10px;
  background-color: ${(props: Props) =>
    props.background ? '#333' : '#73224f'};
`;
