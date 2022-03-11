import { message } from 'antd';
import { FormEventHandler, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { requestVerificationCode } from '../../api';
import { RequestVerificationCodeSuccess } from '../../api/types';
import useFetchMutation from '../../hooks/useFetchMutation';

import Button from '../common/Button';
import Input from '../common/Input';

import { paths } from '../../pages/routes/path';

function IssuanceAuthCode() {
  const [email, setEmail] = useState('');
  const emailInput = useRef<HTMLInputElement>(null);

  const { mutate, isLoading, isError, error, data } = useFetchMutation<RequestVerificationCodeSuccess>(() =>
    requestVerificationCode(email)
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      message.error(error);
      (emailInput.current as HTMLInputElement).focus();
    }
  }, [isError, error]);

  useEffect(() => {
    if (data) {
      localStorage.setItem('issueToken', data.issueToken);
      // navigate(paths.userInfo.path);
    }
  }, [navigate, data]);

  const authCodeSubmitHandler: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    mutate();
  };

  return (
    <>
      <h2 className="text-center text-2xl font-extrabold">인증 코드 발급</h2>
      <form className="space-y-6" onSubmit={authCodeSubmitHandler}>
        <div className="-space-y-px">
          <div>
            <Input
              inputRef={emailInput}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-md"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Button isLoading={isLoading}> 다음 </Button>
        </div>
      </form>
    </>
  );
}

export default IssuanceAuthCode;
