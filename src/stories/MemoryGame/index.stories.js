import React from 'react';

import { storiesOf } from '@storybook/react';

import MemoryGame from "../../components/MemoryGame"

storiesOf('MemoryGame', module)
  .add('default', () => <MemoryGame />)
  .add('empty', () => <MemoryGame />)
