import styled from 'styled-components';

interface Props {
  image: string;
}

export const Container = styled.div<Props>`
  width: 100vw;
  height: 620px;
  padding: 0.5rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const ContentContainer = styled.div`
  width: 89%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
