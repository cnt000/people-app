import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ButtonStart from '../../components/MemoryGame/button-start'

storiesOf('ButtonStart', module).add('default', () => (
  <ButtonStart onClick={action('clicked')} />
))
