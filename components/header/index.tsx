import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';
import { HeaderContainer, Nav, StyledButton } from './_style';
import DropdownMenu from './dropdown-menu';

export const Header = () => {
  const { t } = useTranslation();

  const dropdownItems = [
    { label: t('failure.type1'), link: '/failure-types?type1' },
    { label: t('failure.type2'), link: '/failure-types?type2' }
  ];

  return (
    <HeaderContainer>
      <h1>{t('header.title')}</h1>
      <Nav>
        <ul>
          <li>
            <DropdownMenu title={t('header.simulator')} items={dropdownItems} />
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
