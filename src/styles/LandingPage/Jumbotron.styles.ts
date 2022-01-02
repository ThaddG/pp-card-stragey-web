import styled from "styled-components";
import pic from "../../assets/naipo-de-k24rOBJ2D_0-unsplash.png"

interface Props {
  image: string;
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 620px;
  background-image: url(${props => props.image});
  background-size: cover;
`