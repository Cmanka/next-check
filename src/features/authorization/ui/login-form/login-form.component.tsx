import React, { FormEvent, memo, useCallback, useEffect } from 'react';

import { useUserStore } from '@/entities/user';
import { StorageKeys } from '@/shared/constants/storage-keys.constant';

import { useLoginFormStore } from '../../model/store/login-form.store';
import * as Styled from './login-form.styles';
import { type LoginFormProps } from './login-form.types';

const LoginFormComponent = ({ onClose }: LoginFormProps) => {
  const { addUser } = useUserStore();
  const { password, loading, error, username, updatePassword, updateUsername, handleSubmit, clearState } =
    useLoginFormStore();

  const onLogin = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit().then((user) => {
      if (user) {
        addUser(user);
        onClose();
        localStorage.setItem(StorageKeys.User, JSON.stringify(user));
      }
    });
  };

  const onChangeUsername = useCallback(
    (username: string) => {
      updateUsername(username);
    },
    [updateUsername],
  );

  const onChangePassword = useCallback(
    (password: string) => {
      updatePassword(password);
    },
    [updatePassword],
  );

  useEffect(
    () => () => {
      clearState();
    },
    [clearState],
  );

  return (
    <Styled.Form onSubmit={onLogin}>
      <Styled.Input label="Username" onChange={onChangeUsername} value={username} />
      <Styled.Input type="password" label="Password" onChange={onChangePassword} value={password} />
      {error && <Styled.Error>{error}</Styled.Error>}
      <Styled.Button disabled={loading} label="Sign in" type="submit" />
    </Styled.Form>
  );
};

export default memo(LoginFormComponent);
