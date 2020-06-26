import styled from 'styled-components/native';

interface Props {
  contrast: boolean;
}
export const Container = styled.View<{contrast: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;
  align-content: center;
  background: ${(props: Props) => (props.contrast ? '#252525' : '#73224f')};
`;
