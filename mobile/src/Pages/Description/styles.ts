import styled from 'styled-components/native';

interface Props {
  background: boolean;
  contrast: boolean;
  colorButton: boolean;
}
export const LabelBox = styled.View<Props>`
  margin: 20px;
  padding: 20px;
  border-radius: 1px;
`;

export const Box = styled.View<Props>`
  margin: 10px;
  padding: 20px;
  border-radius: 1px;
  background: ${(props: Props) => (props.background ? '#000' : 'transparent')};
`;
export const Description = styled.Text<Props>`
  color: ${(props: Props) => (props.contrast ? '#fff' : '#73224f')};
  font-size: ${(props: Props) => (props.contrast ? '25px' : '20px')};
  margin-bottom: 10px;
  font-weight: bold;
  letter-spacing: 2px;
`;
