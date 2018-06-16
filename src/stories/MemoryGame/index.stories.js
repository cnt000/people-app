import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from "react-redux"

import store from "../../store"
import MemoryGame from "../../components/MemoryGame"

storiesOf('MemoryGame', module)
  .add('default', () => <Provider store={store}><MemoryGame /></Provider>)
