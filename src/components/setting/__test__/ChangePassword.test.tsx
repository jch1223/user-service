import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, RenderOptions } from '@testing-library/react';

import SettingProvider from '../../app/SettingContext';
import ChangePassword from '../ChangePassword';
import * as useFetchMutation from '../../../hooks/useFetchMutation';

describe('ChangePassword Component', () => {
  const customRender = (
    ui: ReactElement,
    { providerProps, ...renderOptions }: Omit<RenderOptions & { providerProps?: any }, 'wrapper'>
  ) => {
    return render(
      <SettingProvider {...providerProps}>
        <BrowserRouter>{ui}</BrowserRouter>
      </SettingProvider>,
      renderOptions
    );
  };

  it('에러 발생시 error 내용을 가지고 있는 메세지가 나타나야합니다.', async () => {
    jest
      .spyOn(useFetchMutation, 'default')
      .mockReturnValue({ isError: true, error: 'error', data: '', isLoading: false, mutate: jest.fn() });

    customRender(<ChangePassword />, {});

    const errorElement = await screen.findByText(/error/);
    expect(errorElement).toBeInTheDocument();
  });
});
