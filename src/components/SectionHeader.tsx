import React from 'react';
import { Typography } from '@material-ui/core';

// styles
import '../styles/components/SectionHeader.css';

interface Props {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: Props) {
  return (
    <div className="section-header-container px-2 py-2 mb-2">
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h6">{description}</Typography>
    </div>
  );
}
