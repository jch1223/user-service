import { createContext, Dispatch, ReactNode, useContext, useState } from 'react';

interface SettingProviderProps {
  children: ReactNode;
}

export interface ValueType {
  email: string;
  issueToken: string;
  remainMillisecond: number;
  confirmToken: string;
  setEmail: Dispatch<React.SetStateAction<string>>;
  setIssueToken: Dispatch<React.SetStateAction<string>>;
  setRemainMillisecond: Dispatch<React.SetStateAction<number>>;
  setConfirmToken: Dispatch<React.SetStateAction<string>>;
}

export const SettingContext = createContext<ValueType | null>(null);

export function useSettingContext() {
  const state = useContext(SettingContext);

  if (!state) throw new Error('SettingProvider not found');

  return state;
}

function SettingProvider({ children }: SettingProviderProps) {
  const [email, setEmail] = useState('');
  const [issueToken, setIssueToken] = useState('');
  const [remainMillisecond, setRemainMillisecond] = useState(0);
  const [confirmToken, setConfirmToken] = useState('');

  return (
    <SettingContext.Provider
      value={{
        email,
        issueToken,
        remainMillisecond,
        confirmToken,
        setEmail,
        setIssueToken,
        setRemainMillisecond,
        setConfirmToken,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
}

export default SettingProvider;
