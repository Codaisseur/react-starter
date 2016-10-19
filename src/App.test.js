import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'

chai.use(chaiEnzyme())

const element = shallow(<App />)

describe('<App />', () => {
  it('contains a h1 tag', () => {
    expect(element).to.have.tagName('h1')
  })

  it('says Hello World', () => {
    expect(element).to.have.text('Hello World!')
  })
})
