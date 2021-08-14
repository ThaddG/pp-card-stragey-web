import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// custom components
import FilterCardsMenu from './FilterCardsMenu';
import CardPreview from './CardPreview';

type Filter = 'query' | 'bank' | 'rewardsType' | 'annualFee';
type RewardTypes = 'Dining' | 'Gas' | 'Supermarket' | 'Travel';
export interface CardProps {
  name: string;
  bank: string;
  annualFee: number;
  rewardTypes: Array<RewardTypes>;
}

// TODO: remove this when we get real data
const cards: CardProps[] = [
  {
    name: 'Citi Diamond Preferred',
    bank: 'Citi Bank',
    annualFee: 0,
    rewardTypes: ['Gas', 'Dining'],
  },
  {
    name: 'Chase Freedom Unlimited',
    bank: 'Chase',
    annualFee: 95,
    rewardTypes: ['Supermarket'],
  },
  {
    name: 'Capital One Platinum',
    bank: 'Capital One',
    annualFee: 125,
    rewardTypes: ['Travel', 'Gas'],
  },
  {
    name: 'Discover Student',
    bank: 'Discover',
    annualFee: 0,
    rewardTypes: ['Dining'],
  },
];

export default function CreditCards() {
  const [query, setQuery] = useState('');
  const [bank, setBank] = useState('');
  const [rewardsType, setRewardsType] = useState('');
  const [annualFee, setAnnualFee] = useState<number | null>(null);

  const handleQueryChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setQuery(e.target.value as string);
  const handleBankChange = (event: React.ChangeEvent<{ value: unknown }>) =>
    setBank(event.target.value as string);
  const handleRewardsTypeChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => setRewardsType(event.target.value as string);
  const handleAnnualFeeChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => setAnnualFee(event.target.value as number);

  const resetFilters = () => {
    setQuery('');
    setBank('');
    setRewardsType('');
    setAnnualFee(null);
  };

  const isDefault = (filter: string | number | null) => {
    switch (filter) {
      case 'query':
        return query === '';
      case 'bank':
        return bank === '';
      case 'rewardsType':
        return rewardsType === '';
      case 'annualFee':
        return annualFee === null;
      default:
        return;
    }
  };
  const isAllDefault = () =>
    query === '' && bank === '' && rewardsType === '' && annualFee === null;

  const filterCategory = (array: CardProps[], filter: Filter) => {
    switch (filter) {
      case 'query':
        return array.filter((card) =>
          card.name.toLowerCase().includes(query.toLowerCase())
        );
      case 'bank':
        return array.filter(
          (card) => card.bank.toLowerCase() === bank.toLowerCase()
        );
      case 'rewardsType':
        return array.filter((card) =>
          card.rewardTypes.includes(rewardsType as RewardTypes)
        );
      case 'annualFee':
        return array.filter((card) => card.annualFee === annualFee);
      default:
        return array;
    }
  };

  const renderCreditCards = (arr: CardProps[]) => (
    <>
      {arr.map((card, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="grid-item-container"
        >
          <CardPreview card={card} />
        </Grid>
      ))}
    </>
  );

  // FIXME: does this need to be a callback? look up later
  const renderFilteredCards = () => {
    if (isAllDefault()) return renderCreditCards(cards);
    else {
      let cardArr = cards;

      if (!isDefault('query')) cardArr = filterCategory(cardArr, 'query');
      if (!isDefault('bank')) cardArr = filterCategory(cardArr, 'bank');
      if (!isDefault('rewardsType'))
        cardArr = filterCategory(cardArr, 'rewardsType');
      if (!isDefault('annualFee'))
        cardArr = filterCategory(cardArr, 'annualFee');

      return renderCreditCards(cardArr);
    }
  };

  return (
    <div className="px-2 py-2">
      <Grid container direction="row" spacing={3}>
        <Grid className="grid-item-container" item xs={12} sm={6} md={4} lg={3}>
          <FilterCardsMenu
            query={query}
            bank={bank}
            rewardsType={rewardsType}
            annualFee={annualFee}
            handleQueryChange={handleQueryChange}
            handleBankChange={handleBankChange}
            handleRewardsTypeChange={handleRewardsTypeChange}
            handleAnnualFeeChange={handleAnnualFeeChange}
            resetFilters={resetFilters}
          />
        </Grid>
        {renderFilteredCards()}
      </Grid>
      <Button
        className="mt-4"
        color="primary"
        variant="contained"
        fullWidth={true}
      >
        View Library
        <ArrowForwardIcon></ArrowForwardIcon>
      </Button>
    </div>
  );
}
