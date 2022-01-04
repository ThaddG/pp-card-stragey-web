import styled from 'styled-components';

interface Props {
  readonly image: string;
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 625px;
  padding: 0.5rem 0;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const ContentContainer = styled.div`
  width: 75%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
