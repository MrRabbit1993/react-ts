import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from '../../components/Button'

const defaultProps = {
  onClick: jest.fn() //被监控的模拟函数
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'classA'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}
describe('test Button components', () => {
  test('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Hello</Button>)
    const element = wrapper.getByText('Hello') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element) // 触发点击
    expect(defaultProps.onClick).toHaveBeenCalled() //证明click执行了
  })

  test('should render the correct components based on different props', () => {
    const wrapper = render(<Button {...testProps}>Hello</Button>)
    const element = wrapper.getByText('Hello')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg classA')
  })

  test('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">
        百度
      </Button>
    )
    const element = wrapper.getByText('百度')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  test('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Hello</Button>)
    const element = wrapper.getByText('Hello') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    // expect(element).toBeDisabled()
    fireEvent.click(element) // 触发点击
    expect(defaultProps.onClick).not.toHaveBeenCalled() //证明click没有执行了
  })
})
