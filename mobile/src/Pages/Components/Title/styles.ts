import styled from 'styled-components/native';

type AutoContrast = {
  color: boolean;
  size: boolean;
};

export const Text = styled.Text`
  color: ${(props: AutoContrast) => (props.color ? '#ccc' : '#73224f')};
  font-size: ${(props: AutoContrast) => (props.size ? '30px' : '25px')};
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
`;
