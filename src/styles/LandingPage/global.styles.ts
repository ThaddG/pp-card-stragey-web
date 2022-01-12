import styled from 'styled-components';
import Box from '@mui/material/Box';

interface Props {
  backgroundColor: string;
}

export const Container = styled(Box)<Props>`
  padding: 3rem 0;
  background-color: ${props => props.backgroundColor};
`;