import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from "react-redux"
import '@storybook/addon-viewport/register'

import store from "../../store"
import MemoryGame from "../../components/MemoryGame"
import Center from "../center"

storiesOf('MemoryGame', module)
  .add('default', () => <Center><Provider store={store}><MemoryGame /></Provider></Center>)
