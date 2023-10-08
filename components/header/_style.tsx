import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;

    li {
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: 0.5px solid;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;
