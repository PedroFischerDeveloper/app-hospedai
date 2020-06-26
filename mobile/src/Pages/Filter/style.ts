import styled from 'styled-components/native';

type Props = {
  contrast: boolean;
};
export const Title = styled.Text<Props>`
  font-size: 25px;
  margin-left: 5px;
  margin-top: 20px;
  color: #73224f;
  font-weight: bold;
  text-align: center;
`;
export const Row = styled.View<Props>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: center;
  border: 1px solid #73224f;
  width: 90%;
  padding: 20px 0 20px 20px;
  border-radius: 5px;
  margin: 20px 0;
`;
export const TextButton = styled.Text<Props>`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
export const Button = styled.TouchableOpacity<Props>`
  padding: 20px 0 20px 0;
  width: 90%;
  display: flex;
  align-self: center;
  margin: 5px 0 20px 0;
  border-radius: 10px;
  background-color: ${(props: Props) => (props.contrast ? '#000' : '#73224f')};
`;
