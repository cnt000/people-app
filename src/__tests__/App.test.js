import React from 'react'
import { shallow } from 'enzyme'
import App from '../components/App'

describe('App', () => {
  it('renders without crashing', () => {
    shallow(
      <App auth={{ isAuthenticated: () => true, userHasScopes: () => true }} />
    )
  })

  it('renders not authenticated', () => {
    shallow(
      <App
        auth={{ isAuthenticated: () => false, userHasScopes: () => false }}
      />
    )
  })
})
