import React from 'react'
import { Container } from '@material-ui/core';

// custom components
import Navigation from './Navigation';

// styles
import '../styles/components/Header.css';

export default function Header() {
  return (
    <Container maxWidth={false} className="container-override pt-2">
      <Navigation />
      header
    </Container>
  )
}
