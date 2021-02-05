import React from 'react'
import { render } from '@testing-library/react'
import Button from '../../src/components/Button'

test('react button test', () => {
  const wrapper = render(<Button>hello</Button>)
  const element = wrapper.queryByText('hello')
  expect(element).toBeTruthy()
})
