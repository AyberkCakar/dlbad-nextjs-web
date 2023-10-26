import React from 'react';
import {
  FormBox,
  LoginContainer,
  LoginForm,
  Logo,
  SignInButton
} from './_styles';
import { Box, Link, TextField, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import { LOGIN } from './_graphql';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useTranslation } from '../../../hooks/useTranslation';
import { ILoginRequest } from './_types';
import { AlertMessage } from '../../alert';

export default function Login() {
  const { t } = useTranslation();
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);
  const [alertSuccess, setAlertSuccess] = React.useState<boolean>(false);

  const [login] = useMutation(LOGIN);
  const router = useRouter();
  const [loginRequest, setLoginRequest] = React.useState<ILoginRequest>({
    emailAddress: '',
    password: ''
  });

  const onLoginClick = () => {
    login({ variables: loginRequest })
      .then((result) => {
        setAlertSuccess(true);
        Cookies.set('user', JSON.stringify(result?.data?.login));
        router.replace('/');
      })
      .catch(() => {
        setAlertSuccess(false);
      })
      .finally(() => {
        setAlertOpen(true);
      });
  };

  return (
    <>
      <LoginContainer>
        <LoginForm>
          <FormBox>
            <Typography sx={{ fontSize: 40 }} component="h1">
              {t('general.signIn')}
            </Typography>
            <Logo src={'/assets/logo.png'} />
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={t('login.emailAddress')}
                name="email"
                autoComplete="email"
                autoFocus
                value={loginRequest?.emailAddress}
                onChange={(e) =>
                  setLoginRequest({
                    ...loginRequest,
                    emailAddress: e.target?.value
                  })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={t('login.password')}
                type="password"
                id="password"
                autoComplete="current-password"
                value={loginRequest?.password}
                onChange={(e) =>
                  setLoginRequest({
                    ...loginRequest,
                    password: e.target?.value
                  })
                }
              />
              <Typography sx={{ marginTop: 1 }} color={'rgb(98 91 91)'}>
                {t('login.wouldYouLikeToRegister')}
                <Link href="/sign-up"> {t('general.signUp')}</Link>
              </Typography>

              <SignInButton
                onClick={() => onLoginClick()}
                type="submit"
                fullWidth
              >
                {t('general.signIn').charAt(-1).toLocaleLowerCase() +
                  t('general.signIn').slice(0)}
              </SignInButton>
            </Box>
          </FormBox>
        </LoginForm>
      </LoginContainer>
      <AlertMessage
        openState={alertOpen}
        description={
          alertSuccess ? t('login.successMessage') : t('login.errorMessage')
        }
        alertSuccess={alertSuccess}
        onClose={() => setAlertOpen(false)}
      ></AlertMessage>
    </>
  );
}
