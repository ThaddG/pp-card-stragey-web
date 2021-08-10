import React from 'react'

// styles
import '../styles/components/Section.css';

interface Props {
  children: JSX.Element;
}

export default function Section({children}: Props) {
  return (
    <div className="section-style">
      {children}
    </div>
  )
}
