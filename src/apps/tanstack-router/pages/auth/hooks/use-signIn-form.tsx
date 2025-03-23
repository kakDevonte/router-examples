import { useNavigate } from '@tanstack/react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { flushSync } from 'react-dom';

import { useSigninMutation } from '@/utils/api/requests/signin';
import { useSession } from '@/utils/contexts/session';
import { ROUTES } from '@/utils/constants/routes';

import { signInLoginSchema } from '../constants';

type SignInForm = {
  login: string;
  password: string;
};

export const useSignInForm = () => {
  const navigate = useNavigate();

  const { setSession } = useSession();

  const signinForm = useForm<SignInForm>({
    resolver: zodResolver(signInLoginSchema)
  });

  const signin = useSigninMutation();

  const onSubmit = signinForm.handleSubmit(async (values) => {
    console.log(values);
    await signin.mutateAsync({ params: values });
    flushSync(() => setSession(true));

    navigate({
      to: ROUTES.TODOS,
      replace: true
    });
  });

  return {
    state: {
      loading: signin.isPending
    },
    form: signinForm,
    functions: { onSubmit }
  };
};
