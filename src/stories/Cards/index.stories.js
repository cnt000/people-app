import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Cards from "../../components/Cards"
import defaultState from "../../defaultState"

const cards_two = [
  {
    value: "A",
    showed: false
  },
  {
    value: "A",
    showed: false
  }
]

const cards_four = [
  {
    value: "C",
    showed: false
  },
  {
    value: "D",
    showed: false
  },
  {
    value: "C",
    showed: false
  },
  {
    value: "D",
    showed: false
  }
]

const cards_six = [
  {
    value: "A",
    showed: false
  },
  {
    value: "B",
    showed: false
  },
  {
    value: "C",
    showed: false
  },
  {
    value: "A",
    showed: false
  },
  {
    value: "B",
    showed: false
  },
  {
    value: "C",
    showed: false
  }
]

storiesOf('Cards', module)
  .add('default state', () => <Cards cards={defaultState.cards} showCard={action('show')} />)
  .add('2 cards', () => <Cards cards={cards_two} showCard={action('show')} />)
  .add('4 cards', () => <Cards cards={cards_four} showCard={action('show')} />)
  .add('6 cards', () => <Cards cards={cards_six} showCard={action('show')} />)
  .add('empty', () => <Cards cards={[]} showCard={action('show')} />)
