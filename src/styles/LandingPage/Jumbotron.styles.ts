import styled from "styled-components";

interface Props {
  image: string;
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 620px;
  padding: .5rem;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`

export const ContentContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`