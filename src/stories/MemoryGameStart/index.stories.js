import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-viewport/register'

import MemoryGameStart from "../../components/MemoryGameStart"

storiesOf('MemoryGameStart', module)
  .add('default', () => <MemoryGameStart onClick={action('clicked')} />)
