import React from 'react'
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import CardPreview from '../../../components/CardPreview';
import {CardProps} from '../../../components/CreditCards';

describe('CardPreview', () => {

  it('should render', () => {
    // Assign
    const testingCard: CardProps = {
      name: "Testing Card",
      bank: "Test bank",
      annualFee: 0,
      rewardTypes: ['Gas']
    }
    render(<CardPreview card={testingCard} />)

    // Act

    // Assert
  })

})