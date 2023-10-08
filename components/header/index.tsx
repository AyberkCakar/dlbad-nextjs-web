import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';
import { HeaderContainer, Nav, StyledButton } from './_style';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <h1>{t('header.title')}</h1>
      <Nav>
        <ul>
          <li>
            <Link href="/simulator">{t('header.simulator')}</Link>
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
            <Link href="/">{t('header.userSettings')}</Link>
          </li>
        </ul>
      </Nav>
      <StyledButton>{t('header.logout')}</StyledButton>
    </HeaderContainer>
  );
};
