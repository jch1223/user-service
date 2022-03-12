/* eslint-disable testing-library/no-unnecessary-act */
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LogIn from './LogIn';
import { act } from 'react-dom/test-utils';

describe('LogIn Test', () => {
  test('정상적으로 로그인이 되었을 시 user-info페이지로 이동합니다.', async () => {
    const response = {
      ok: true,
      accessToken: 'asdf',
    };
    jest.spyOn(global, 'fetch').mockImplementation((() =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve(JSON.stringify(response.accessToken)),
      })) as jest.Mock);

    act(() => {
      render(
        <BrowserRouter>
          <LogIn />
        </BrowserRouter>
      );
    });

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('Email address'), {
        target: { value: 'test@gmail.com' },
      });
      fireEvent.change(screen.getByPlaceholderText('Password'), {
        target: { value: '1234' },
      });

      await userEvent.click(screen.getByRole('button'));
    });

    screen.debug();
  });
});
