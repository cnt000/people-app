import React from 'react';

import { storiesOf } from '@storybook/react';

import Cards from "../../components/Cards"
import cards from "../../defaultState"

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
  .add('default state', () => <Cards cards={cards} />)
  .add('2 cards', () => <Cards cards={cards_two} />)
  .add('4 cards', () => <Cards cards={cards_four} />)
  .add('6 cards', () => <Cards cards={cards_six} />)
  .add('empty', () => <Cards cards={[]} />)
