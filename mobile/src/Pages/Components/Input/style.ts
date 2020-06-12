import styled from 'styled-components/native';

type InputConfig = {
  background: boolean;
  border: boolean;
  height: boolean;
  font: boolean;
};
export const Input = styled.TextInput`
  height: ${(props: InputConfig) => (props.height ? '70px' : '60px')};
  margin-bottom: 10;
  background-color: ${(props: InputConfig) =>
    props.background ? '#252525' : '#fff'};
  border-color: ${(props: InputConfig) => (props.border ? '#fff' : '#73224f;')};
  border-width: 2px;
  width: 400;
  color: ${(props: InputConfig) => (props.border ? '#fff' : '#73224f;')};
  margin: 15px;
  font-size: ${(props: InputConfig) => (props.border ? '22px' : '18px')};
  padding: 20px;
`;
