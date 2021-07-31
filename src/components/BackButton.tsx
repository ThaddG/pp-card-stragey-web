import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// css
import '../styles/components/BackButton.css';

interface Props {
  text?: string;
  to?: string;
  onClick?: () => void;
}

export default function BackButton({ text, onClick }: Props) {
  return (
    <Button id="back-btn" color="primary" variant="contained" onClick={onClick}>
      <ArrowBackIosIcon></ArrowBackIosIcon>
      {text ? <span id="back-btn-text">{text}</span> : null}
    </Button>
  );
}
