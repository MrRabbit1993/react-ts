import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from '../../components/Button'
const defaultProps = {
  onClick: jest.fn()
}

describe('test Button components', () => {
  test('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Hello</Button>)
    const element = wrapper.getByText('Hello')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled() //证明click执行了
  })

  test('should render the correct components based on different props', () => {})

  test('should render a link when btnType equals link and href is provided', () => {})

  test('should render disabled button when disabled set to true', () => {})
})
