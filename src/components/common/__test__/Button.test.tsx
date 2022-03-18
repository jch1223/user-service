import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

const mockedOnClick = jest.fn();

describe('Button Component', () => {
  it('isLoading props가 true일 경우 Spin 컴포넌트가 렌더링 되어야 합니다.', () => {
    render(<Button isLoading={true} />);
    const spinElement = screen.getByTestId('spin');
    expect(spinElement).toBeInTheDocument();
  });

  it('button 안에 text가 렌더링 되어야 합니다.', () => {
    render(<Button>click</Button>);
    const buttonElement = screen.getByText(/click/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('click시 onClick 함수가 실행되어야 합니다.', () => {
    render(<Button onClick={mockedOnClick} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(mockedOnClick).toBeCalled();
  });
});
