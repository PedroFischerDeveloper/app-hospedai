import styled from 'styled-components/native';

type Props = {
  color: boolean;
  size: boolean;
};

export const Text = styled.Text<{color: boolean; size: boolean}>`
  color: ${(props: Props) => (props.color ? '#ccc' : '#fff')};
  font-size: ${(props: Props) => (props.size ? '20px' : '18px')};
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
`;
