import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Input Component', () => {
  it('input에 text가 입력되어야 합니다.', () => {
    render(<Input placeholder="test input" />);

    const inputElement: HTMLInputElement = screen.getByPlaceholderText(/test input/i);
    const value = 'change input';

    fireEvent.change(inputElement, {
      target: { value },
    });

    expect(inputElement.value).toBe(value);
  });

  it('input에서 onChange 이벤트가 실행될 때 props로 받은 onChange 함수가 실행되어야 합니다.', () => {
    const mockedOnChange = jest.fn();
    render(<Input placeholder="test input" onChange={mockedOnChange} />);

    const inputElement: HTMLInputElement = screen.getByPlaceholderText(/test input/i);
    const value = 'change input';

    fireEvent.change(inputElement, {
      target: { value },
    });

    expect(mockedOnChange).toBeCalled();
  });
});
