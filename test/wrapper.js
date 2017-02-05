import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount, render } from 'enzyme'
import store from '~/store'

export default (node, nodeContext = {}) => {
  let context = Object.assign({}, nodeContext, { store })
  return mount(
    <Provider store={store}>
      {node}
    </Provider>, { context })
}
