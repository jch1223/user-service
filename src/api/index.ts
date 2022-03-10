import request from './request';
import { Login } from './types';

export function login(data: Login) {
  return request({
    url: 'login',
    method: 'POST',
    data,
  });
}
