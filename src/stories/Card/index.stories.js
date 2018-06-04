import React from 'react';

import { storiesOf } from '@storybook/react';

import Card from "../../components/Card"

storiesOf('Card', module)
  .add('default', () => <Card value="A" showed={false} />)
  .add('showed', () => <Card value="B" showed={true} />)
