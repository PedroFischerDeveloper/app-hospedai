import styled from 'styled-components/native';

interface Props {
  contrast: boolean;
}
export const Input = styled.TextInput`
  font-size: 20px;
  align-self: flex-start;
  width: 80%;
  color: ${(props: Props) => (props.contrast ? '#fff' : '#73224f')};
  padding-left: 20px;
  margin-right: 30px;
  margin-left: 10px;
  border-radius: 5px;
  background: #fff;
`;
export const Container = styled.View<{contrast: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-content: center;
  background: ${(props: Props) => (props.contrast ? '#252525' : '#73224f')};
`;
