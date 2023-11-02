import { Button, Icon } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { MenuItem2 } from './_styles';

export const MenuText = styled.div`
  display: flex;
  font-size: 14px;
  margin-left: 10px;
  align-self: center;
  text-transform: none;
  &::first-letter {
    text-transform: uppercase;
  }
  & {
    text-transform: none;
  }
`;

export const MenuItem = styled(Button)`
  margin-top: 5px !important;
  width: 225px !important;
  color: white !important;
  justify-content: start !important;

  :hover {
    background-color: #706e6e !important;
  }
`;

export const CollapsibleButton = ({
  child,
  name,
  icon,
  isOpen,
  onClick,
  baseClass
}: any) => {
  const router = useRouter();

  const toggleExpansion = () => {
    onClick();
  };

  const childElements = child.map((child: any) => (
    <MenuItem2 key={child.name} onClick={() => router.replace(child.link)}>
      <Icon
        style={{ color: 'white', fontSize: '18px', width: '30px' }}
        baseClassName={child?.baseClass ? child.baseClass : 'fa-solid'}
        className={child.icon}
      />

      <MenuText>
        {child.name.charAt(0).toUpperCase() + child.name.slice(1)}
      </MenuText>
    </MenuItem2>
  ));

  return (
    <div>
      <MenuItem onClick={toggleExpansion}>
        <Icon
          style={{ color: 'white', fontSize: '18px', width: '30px' }}
          baseClassName="fa-solid"
          className={icon}
        />
        <MenuText>{name.charAt(0).toUpperCase() + name.slice(1)}</MenuText>
        <Icon
          baseClassName={baseClass ? baseClass : 'fa-solid'}
          className={isOpen ? 'fa-chevron-down' : 'fa-chevron-left'}
          style={{ fontSize: '16px', width: '80%' }}
        />
      </MenuItem>
      {isOpen && <div>{childElements}</div>}
    </div>
  );
};
