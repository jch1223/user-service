import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { login } from '../../api';
import { LoginSuccess } from '../../api/types';
import useFetchMutation from '../../hooks/useFetchMutation';

import Input from './common/Input';
import Button from './common/Button';

import { paths } from '../../pages/routes/path';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate, isLoading, isError, error, data } = useFetchMutation<LoginSuccess>(() => login({ email, password }));
  const navigate = useNavigate();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isError) {
      message.error(error);
    }

    if (error === 'email과 일치하는 회원 정보가 없어요' && emailInput.current) {
      emailInput.current.focus();
    }
    if (error === '잘못된 비밀번호예요' && passwordInput.current) {
      passwordInput.current.focus();
    }
  }, [isError, error]);

  useEffect(() => {
    if (data) {
      localStorage.setItem('accessToken', data.accessToken);
      navigate(paths.userInfo.path);
    }
  }, [navigate, data]);

  const loginHandler: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    mutate();
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={loginHandler}>
      <div className="-space-y-px">
        <div>
          <Input
            inputRef={emailInput}
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="rounded-t-md"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            inputRef={passwordInput}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="rounded-b-md"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Button isLoading={isLoading}>Log in</Button>
      </div>
    </form>
  );
}

export default LogIn;
