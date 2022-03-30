/* eslint-disable testing-library/no-unnecessary-act */
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import TimeCounter from '../TimeCounter';

describe('TimeCounter Test', () => {
  let container: null | Element = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.useFakeTimers();
  });

  afterEach(() => {
    if (!container) return;

    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.useRealTimers();
  });

  it('millisecond를 props를 받으면 mm:ss 형식으로 렌더링 되어야 합니다.', () => {
    if (!container) throw new Error('container가 비어있습니다.');

    act(() => {
      render(<TimeCounter millisecond={60000} />, container);
    });

    expect(container.textContent).toBe('01:00');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(container.textContent).toBe('00:59');
  });

  it('00:00 이하로 시간이 낮아지지 않아야 합니다.', () => {
    if (!container) throw new Error('container가 비어있습니다.');

    act(() => {
      render(<TimeCounter millisecond={1000} />, container);
    });

    expect(container.textContent).toBe('00:01');

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(container.textContent).toBe('00:00');
  });
});
