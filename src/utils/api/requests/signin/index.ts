import { useMutation } from '@tanstack/react-query';
import { api } from '../../instance';

export interface SigninParams {
  login: string;
  password: string;
}

export type SigninRequestConfig = RequestConfig<SigninParams>;

export const signin = ({ params, config }: SigninRequestConfig) =>
  api.post('signin/login', params, config);

export const useSigninMutation = () =>
  useMutation({
    mutationKey: ['signin'],
    mutationFn: (config: SigninRequestConfig) => signin(config)
  });
