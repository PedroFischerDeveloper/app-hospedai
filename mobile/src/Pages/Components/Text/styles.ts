import styled from 'styled-components/native';

type AutoContrast = {
  color: boolean;
  size: boolean;
};

export const Text = styled.Text`
  color: ${(props: AutoContrast) => (props.color ? '#ccc' : '#fff')};
  font-size: ${(props: AutoContrast) => (props.size ? '22px' : '18px')};
  font-weight: bold;
  letter-spacing: 4px;
  text-align: center;
`;
