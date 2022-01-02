import styled from "styled-components";

interface Props {
  image: string;
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 620px;
  background-image: url(${props => props.image});
  background-size: cover;
`