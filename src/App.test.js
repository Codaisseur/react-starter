import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'

chai.use(chaiEnzyme())

const app = shallow(<App />)

describe('<App />', () => {
  it('contains a h1 tag', () => {
    expect(app).to.have.tagName('h1')
  })

  it('says Hello World', () => {
    expect(app).to.have.text('Hello World!')
  })
})
