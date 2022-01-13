import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  backgroundColor: string;
}

export const SectionContainer = styled(Box)<Props>`
  padding: 3rem 0;
  background-color: ${(props) => props.backgroundColor};
`;

export const SectionTitle = styled(Typography)`
  color: #5becad;
`;
