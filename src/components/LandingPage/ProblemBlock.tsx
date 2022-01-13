import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ProblemBlock: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <Box sx={{ maxWidth: 340 }}>
    <Typography variant="h6">{title}</Typography>
    <Typography variant="body1">{description}</Typography>
  </Box>
);

export default ProblemBlock;