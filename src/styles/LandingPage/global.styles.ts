import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  backgroundColor: string;
}
interface MobileCenteredGridItemProps {
  isMobile: boolean;
}

export const SectionContainer = styled(Box)<Props>`
  padding: 3rem 0;
  background-color: ${(props) => props.backgroundColor};
`;

export const SectionTitle = styled(Typography)`
  color: #5becad;
`;

export const MobileCenteredGridItem = styled(Grid)<MobileCenteredGridItemProps>`
  ${(props) =>
    props.isMobile &&
    `
    display: flex;
    justify-content: center;
  `}
`;
