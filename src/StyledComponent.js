// 5월 7일 화
import styled, { css } from "styled-components";
const Box = styled.div`
  background: ${(Props) => Props.color || "blue"}; // 색이 없으면 blue
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  ${(props) =>
    props.inverted &&
    css`
      // css 재정의
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    // 현재 버튼과 다음 버튼
    margin-left: 1rem; // = 16px
  }
`;
const StyledComponent = () => {
  return (
    <Box>
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};
export default StyledComponent;
