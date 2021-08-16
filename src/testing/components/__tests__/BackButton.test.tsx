import React from 'react'
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import BackButton from '../../../components/BackButton';

describe('BackButton', () => {

  it('should render', () => {
    render(<BackButton />)
  })

  it('should show prop text when given', () => {
    render(<BackButton text='Back' />)
  })

})