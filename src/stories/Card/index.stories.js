import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Card from "../../components/Card"

storiesOf('Card', module)
  .add('default', () => <Card value="A" showed={false} onClick={action('clicked')} />)
  .add('showed', () => <Card value="B" showed={true} onClick={action('clicked')} />)
