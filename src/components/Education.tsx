import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// custom components
import EducationGuidePreview from './EducationGuidePreview';

// styles
import '../styles/components/Education.css';

// TODO: remove this comment when we get real data
const guides = [
  {
    title: 'guide 1',
    description: 'guide description 1',
    imageUrl: 'https://bit.ly/3AEbdfy',
  },
  {
    title: 'guide 2',
    description: 'guide description 2',
    imageUrl: 'https://bit.ly/3AEbdfy',
  },
  {
    title: 'guide 3',
    description: 'guide description 3',
    imageUrl: 'https://bit.ly/3AEbdfy',
  },
  {
    title: 'guide 4',
    description: 'guide description 4',
    imageUrl: 'https://bit.ly/3AEbdfy',
  },
  {
    title: 'guide 5',
    description: 'guide description 5',
    imageUrl: 'https://bit.ly/3AEbdfy',
  },
];

export default function Education() {
  return (
    <div className="px-2 py-2">
      <Grid container direction="row" spacing={3}>
        {guides.map((guide, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={6}
            lg={4}
            className="grid-item-container"
          >
            <EducationGuidePreview guide={guide} />
          </Grid>
        ))}
      </Grid>
      <Button
        className="mt-4"
        color="primary"
        variant="contained"
        fullWidth={true}
      >
        Get Smarter
        <ArrowForwardIcon></ArrowForwardIcon>
      </Button>
    </div>
  );
}
