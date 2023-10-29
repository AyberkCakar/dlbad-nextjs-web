import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';
import {
  HeaderButtonContainer,
  HeaderContainer,
  Logo,
  LogoContainer,
  LogoTitle1,
  LogoTitle2,
  Nav,
  StyledButton
} from './_style';
import DropdownMenu from './dropdown-menu';
import { useRouter } from 'next/router';
import { useLogout } from '../../hooks/useLogout';
import React from 'react';
import ChangePasswordModal from './change-password';

export const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { logout } = useLogout();

  const [changePasswordModalOpenState, setChangePasswordModalOpenState] =
    React.useState<boolean>(false);

  const dropdownItems = [
    { label: t('Simulator'), link: '/simulator' },
    { label: t('Add Simulator'), link: '/add-simulator' }
  ];

  const onLogoutClick = () => {
    logout();
    router.reload();
  };

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Logo src={'/assets/logo.png'} />
          <LogoTitle1>{t('header.title1')}</LogoTitle1>&nbsp;
          <LogoTitle2>{t('header.title2')}</LogoTitle2>
        </LogoContainer>
        <Nav>
          <ul>
            <li>
              <DropdownMenu
                title={t('header.simulator')}
                items={dropdownItems}
              />
            </li>
            <li>
              <Link href="/">{t('header.dataList')}</Link>
            </li>
            <li>
              <Link href="/">{t('header.algorithmResult')}</Link>
            </li>
            <li>
              <Link href="/failure-types">{t('header.fauilureTypes')}</Link>
            </li>
            <li>
              <Link href="/user-settings">{t('header.userSettings')}</Link>
            </li>
          </ul>
        </Nav>
        <HeaderButtonContainer>
          <StyledButton onClick={() => setChangePasswordModalOpenState(true)}>
            {t('header.changePassword')}
          </StyledButton>
          <StyledButton onClick={() => onLogoutClick()}>
            {t('header.logout')}
          </StyledButton>
        </HeaderButtonContainer>
      </HeaderContainer>
      <ChangePasswordModal
        openState={changePasswordModalOpenState}
        onClose={() => setChangePasswordModalOpenState(false)}
      ></ChangePasswordModal>
    </>
  );
};
