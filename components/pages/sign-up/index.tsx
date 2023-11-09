import React from 'react';
import {
  SignUpContainer,
  SignUpForm,
  SignUpButton,
  FormBox,
  BodyBox,
  Logo
} from './_styles';
import { Link, TextField, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from './_graphql';
import { useRouter } from 'next/router';
import { useTranslation } from '../../../hooks/useTranslation';
import { AlertMessage } from '../../alert';
import { NextSeo } from 'next-seo';

export default function SignUp() {
  const { t } = useTranslation();
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);
  const [alertSuccess, setAlertSuccess] = React.useState<boolean>(false);

  const [signUp] = useMutation(SIGN_UP);
  const router = useRouter();
  const [signUpRequest, setSignUpRequest] = React.useState<any>({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  });

  const onSignUpClick = () => {
    signUp({ variables: signUpRequest })
      .then((result) => {
        setAlertSuccess(true);
        localStorage.setItem('user', result.data?.signUp);
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
      <NextSeo title={t('header.mergeTitle') + ' - ' + t('general.signUp')} />
      <SignUpContainer>
        <SignUpForm>
          <FormBox>
            <Typography sx={{ fontSize: 40 }} component="h1">
              {t('general.signUp')}
            </Typography>
            <Logo src={'/assets/logo.png'} />
            <BodyBox>
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label={t('signUp.firstName')}
                name="firstName"
                autoComplete="firstName"
                autoFocus
                value={signUpRequest?.firstName}
                onChange={(e) =>
                  setSignUpRequest({
                    ...signUpRequest,
                    firstName: e.target?.value
                  })
                }
              />
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label={t('signUp.lastName')}
                name="lastName"
                autoComplete="lastName"
                autoFocus
                value={signUpRequest?.lastName}
                onChange={(e) =>
                  setSignUpRequest({
                    ...signUpRequest,
                    lastName: e.target?.value
                  })
                }
              />
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="email"
                label={t('signUp.emailAddress')}
                name="email"
                autoComplete="email"
                autoFocus
                value={signUpRequest?.emailAddress}
                onChange={(e) =>
                  setSignUpRequest({
                    ...signUpRequest,
                    emailAddress: e.target?.value
                  })
                }
              />
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                name="password"
                label={t('signUp.password')}
                type="password"
                id="password"
                autoComplete="current-password"
                value={signUpRequest?.password}
                onChange={(e) =>
                  setSignUpRequest({
                    ...signUpRequest,
                    password: e.target?.value
                  })
                }
              />
              <Typography sx={{ marginTop: 1 }} color={'rgb(98 91 91)'}>
                {t('signUp.alreadyHaveRegister')}&nbsp;
                <Link href="/login">{t('general.signIn')}</Link>
              </Typography>

              <SignUpButton
                onClick={() => onSignUpClick()}
                type="submit"
                fullWidth
                variant="contained"
              >
                {t('general.signUp').charAt(-1).toLocaleLowerCase() +
                  t('general.signUp').slice(0)}
              </SignUpButton>
            </BodyBox>
          </FormBox>
        </SignUpForm>
      </SignUpContainer>
      <AlertMessage
        openState={alertOpen}
        description={
          alertSuccess ? t('signUp.successMessage') : t('signUp.errorMessage')
        }
        alertSuccess={alertSuccess}
        onClose={() => setAlertOpen(false)}
      ></AlertMessage>
    </>
  );
}
