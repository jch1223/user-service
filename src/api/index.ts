import request from './request';
import { Login } from './types';

export function login(data: Login) {
  return request({
    url: 'login',
    method: 'POST',
    data,
  });
}

export function logout(accessToken: string) {
  return request({
    url: 'logout',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export function getUserInfo(accessToken: string) {
  return request({
    url: 'user',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export function requestVerificationCode(email: string) {
  return request({
    url: `reset-password?email=${email}`,
  });
}
