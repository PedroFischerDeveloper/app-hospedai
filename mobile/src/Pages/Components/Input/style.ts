import styled from 'styled-components/native';

interface Props {
  background: boolean;
  border: boolean;
  height: boolean;
  font: boolean;
}

export const Input = styled.TextInput<{
  background: boolean;
  border: boolean;
  height: boolean;
  font: boolean;
}>`
  height: ${(props: Props) => (props.height ? '70px' : '60px')};
  margin-bottom: 5px;
  background-color: ${(props: Props) =>
    props.background ? '#252525' : '#fff'};
  border-color: ${(props: Props) => (props.border ? '#fff' : '#73224f;')};
  border-width: 2px;
  width: 100%;
  border-radius: 10px;
  margin: 5px 0 10px 0;
  color: ${(props: Props) => (props.border ? '#fff' : '#73224f')};
  font-size: ${(props: Props) => (props.border ? '18px' : '16px')};
  padding: 20px;
`;
