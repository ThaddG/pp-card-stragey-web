import styled from 'styled-components';
import { Container as MuiContainer } from '@mui/material';

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
