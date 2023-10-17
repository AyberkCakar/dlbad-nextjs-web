import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownToggle = styled.button`
  font-size: 1em;
  padding: 0;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const DropdownMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  color: white;
  border: 1px solid #555;
  border-radius: 5px;
  z-index: 1;
  flex-direction: column;
  margin-top: 5px;
  gap: 0 !important;
`;

export const DropdownMenuItem = styled.li`
  justify-content: center;
  display: flex;
  width: auto;
  white-space: nowrap;
  padding: 10px;
  &:hover {
    background-color: #555;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;
