import React from 'react'

// custom components
import SectionHeader from './SectionHeader';

// styles
import '../styles/components/Section.css';

interface Props {
  children: JSX.Element;
  title: string;
  description: string;
}

export default function Section({children, title, description}: Props) {
  return (
    <div className="section-style">
      <SectionHeader title={title} description={description} />
      {children}
    </div>
  )
}
