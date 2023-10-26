import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 0 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.5rem;

    h1 {
      display: none;
    }
  }
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

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: center;
    }

    li {
      margin: 0.3rem;
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

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export const Logo = styled.img`
  width: 90px;
  height: 90px;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const LogoTitle1 = styled.h1`
  color: #68a49f;
`;

export const LogoTitle2 = styled.h1`
  color: #f652a0;
`;
