import styled from 'styled-components/native';

interface Props {
  background: boolean;
}

export const Container = styled.View<{background: boolean}>`
  height: 60px;
  background: ${(props: Props) => (props.background ? '#252525' : '#73224f')};
  align-items: flex-end;
  justify-content: center;
  border-color: ${(props: Props) => (props.background ? '#fff' : '#73224f')};
  border-width: ${(props: Props) => (props.background ? '2px' : '0px')};
`;
