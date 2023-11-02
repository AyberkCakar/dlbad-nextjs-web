import React, { useState } from 'react';
import { ProfileCard } from './profile-card';
import {
  HeaderActions,
  HeaderContainer,
  HeaderContent,
  ProfileButtonAvatar,
  ProfileButtonContainer,
  ProfileButtonText,
  ToggleButton
} from './_styles';
import { Icon } from '@mui/material';
import { IUser } from '../../models/user';
import { UserService } from '../../utils/services/userService';
import Settings from '../settings';

export const Header = ({ toggleDrawer }: any) => {
  const user: IUser = UserService.getUser() as IUser;
  const [isProfileCardOpen, setProfileCardOpen] = useState(false);

  const toggleProfileCard = () => {
    setProfileCardOpen(!isProfileCardOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <ToggleButton onClick={() => toggleDrawer()}>
          <Icon baseClassName="fa-solid" className={'fa-bars'} />
        </ToggleButton>
      </HeaderContent>

      <HeaderActions>
        <Settings />
        <ToggleButton style={{ marginRight: 20 }} onClick={toggleProfileCard}>
          <ProfileButtonContainer>
            <ProfileButtonAvatar src={'/assets/user-avatar.png'} />
            <ProfileButtonText>
              {user.firstName} {user.lastName}
            </ProfileButtonText>
          </ProfileButtonContainer>
        </ToggleButton>
        {isProfileCardOpen && (
          <ProfileCard user={{}} isOpen={isProfileCardOpen} />
        )}
      </HeaderActions>
    </HeaderContainer>
  );
};
