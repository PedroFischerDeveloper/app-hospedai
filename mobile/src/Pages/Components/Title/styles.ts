import styled from 'styled-components/native';

type AutoContrast = {
  color: boolean;
  size: boolean;
};

export const Text = styled.Text`
  color: ${(props: AutoContrast) => (props.color ? '#ccc' : '#73224f')};
  font-size: ${(props: AutoContrast) => (props.size ? '60px' : '50px')};
  font-weight: 700;
`;
