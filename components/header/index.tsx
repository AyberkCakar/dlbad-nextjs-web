import React, { useEffect, useRef, useState } from 'react';
import { ProfileCard } from './profile-card';
import {
  HeaderActions,
  HeaderContainer,
  HeaderContent,
  ProfileButtonAvatar,
  ProfileButtonContainer,
  ProfileButtonText,
  ToggleButton,
  ToggleProfileButton
} from './_styles';
import { Icon } from '@mui/material';
import { IUser } from '../../models/user';
import { UserService } from '../../utils/services/userService';
import Settings from '../settings';
import { useTranslation } from '../../hooks/useTranslation';

export const Header = ({ toggleDrawer }: any) => {
  const { t } = useTranslation();
  const user: IUser = UserService.getUser() as IUser;
  const [isProfileCardOpen, setProfileCardOpen] = useState(false);

  const toggleProfileCard = () => {
    setProfileCardOpen(!isProfileCardOpen);
  };

  const outsideClickHandler = (e: any) => {
    const html: string = e.target.outerHTML;
    if (
      !html.includes('ProfileButtonText') &&
      !html.includes(t('header.changePassword'))
    ) {
      setProfileCardOpen(false);
    }
  };

  React.useEffect(() => {
    if (isProfileCardOpen) {
      document.addEventListener('click', outsideClickHandler);
      return () => document.removeEventListener('click', outsideClickHandler);
    }
  }, [isProfileCardOpen]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <ToggleButton onClick={() => toggleDrawer()}>
          <Icon baseClassName="fa-solid" className={'fa-bars'} />
        </ToggleButton>
      </HeaderContent>

      <HeaderActions>
        <Settings />
        <ToggleProfileButton
          style={{ marginRight: 20 }}
          onClick={toggleProfileCard}
        >
          <ProfileButtonContainer>
            <ProfileButtonAvatar src={'/assets/user-avatar.png'} />
            <ProfileButtonText>
              {user.firstName} {user.lastName}
            </ProfileButtonText>
          </ProfileButtonContainer>
        </ToggleProfileButton>
        {isProfileCardOpen && <ProfileCard isOpen={isProfileCardOpen} />}
      </HeaderActions>
    </HeaderContainer>
  );
};
