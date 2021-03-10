// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 80px;
  min-height: 80px;
  max-height: 80px;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

// Element: LogoContainer
export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

// Element: Logo
export const Logo = styled.div`
  align-items: center;
  display: flex;
  max-height: 80px;
  justify-content: center;
  padding: 2rem;

  & span {
    color: #2a2a2e;
    font-size: 2rem;
    font-weight: 600;
  }
`;

// Element: UserContainer
export const UserContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 2rem;
  transition: all 100ms linear;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: all 100ms linear;
  }
`;

// Element: UserIcon
export const UserIcon = styled.div`
  align-items: center;
  display: flex;
  max-height: 80px;
  justify-content: center;
  margin-right: 0.8rem;
`;

// Element: UserDetails
export const UserDetails = styled.div`
  align-items: flex-start;
  display: flex;
  max-height: 80px;
  flex-direction: column;
  justify-content: center;

  & span {
    &:nth-child(1) {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: -0.2rem;
    }

    &:nth-child(2) {
      font-size: 0.8rem;
    }
  }
`;
