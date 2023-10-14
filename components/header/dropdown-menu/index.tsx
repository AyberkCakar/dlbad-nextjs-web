import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownMenuItem,
  DropdownMenuList,
  DropdownToggle
} from './_syle';

const DropdownMenu = ({ title, items }: { title: string; items: any[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownToggle onClick={toggleMenu}>{title}</DropdownToggle>
      {isOpen && (
        <DropdownMenuList>
          {items.map((item: any, index: number) => (
            <DropdownMenuItem key={index}>
              <a href={item.link}>{item.label}</a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuList>
      )}
    </DropdownContainer>
  );
};

export default DropdownMenu;
