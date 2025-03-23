import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { SpinnerIcon } from '@/components/icons';

import { useSignInForm } from './hooks/use-signIn-form';

export const AuthPage = () => {
  const { form, functions, state } = useSignInForm();

  return (
    <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>Login to your account</h1>
        <p className='text-sm text-muted-foreground'>Enter your email and password</p>
      </div>
      <div>
        <Form {...form}>
          <form
            className='space-y-4'
            onSubmit={(event) => {
              event.preventDefault();
              functions.onSubmit();
            }}
          >
            <FormField
              render={({ field }) => (
                <FormItem>
                  <Label className='sr-only' htmlFor='login'>
                    login
                  </Label>
                  <FormControl>
                    <Input
                      disabled={state.loading}
                      autoCapitalize='none'
                      autoCorrect='off'
                      placeholder='write login or email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name='login'
              control={form.control}
            />
            <FormField
              render={({ field }) => (
                <FormItem>
                  <Label className='sr-only' htmlFor='password'>
                    Password
                  </Label>
                  <FormControl>
                    <Input
                      disabled={state.loading}
                      autoCapitalize='none'
                      autoComplete='password'
                      autoCorrect='off'
                      placeholder='your very secret password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name='password'
              control={form.control}
            />
            <Button className='w-full' type='submit' disabled={state.loading}>
              {state.loading && <SpinnerIcon className='mr-2 h-4 w-4 animate-spin' />}
              Sign in
            </Button>
          </form>
        </Form>
        <div className='flex justify-center'>
          <Button variant='link'>
            <span className='bg-background px-2 text-muted-foreground'>create new account</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
