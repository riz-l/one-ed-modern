// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background-color: #ffffff;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  padding: 1rem;
`;

// Element: Logo
export const Logo = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 0 0.8rem;
  width: 100%;

  & span {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

// Element: Options
export const Options = styled.nav`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
`;

// Element: OptionContainer
export const OptionContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0.8rem;
  width: 100%;
`;

// Element: OptionHeading
export const OptionHeading = styled.span`
  /* color: #515a62; */
  color: #00687a;
  padding: 0.4rem 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
`;

// Element: OptionItem
export const OptionItem = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 0.6rem 0.8rem;
  transition: all 100ms linear;
  width: 100%;

  & svg {
    /* fill: #8a8a8a; */
    fill: #44444b;
    height: 20px;
    margin-right: 0.8rem;
    width: 20px;
  }

  & span {
    /* color: #8a8a8a; */
    color: #44444b;
    transition: all 100ms linear;
  }

  &:hover {
    /* background-color: #f7f7f7; */
    background-color: #e5f3f6;
    transition: all 100ms linear;

    & span {
      /* color: #1990fe; */
      color: #008ba3;
      transition: all 100ms linear;
    }
  }
`;

// Element: Settings
export const Settings = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 0.8rem;
  width: 100%;
`;

// Element: SettingsItem
export const SettingsItem = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 0.6rem 0.8rem;
  transition: all 100ms linear;
  width: 100%;

  & svg {
    /* fill: #8a8a8a; */
    fill: #44444b;
    height: 20px;
    margin-right: 0.8rem;
    width: 20px;
  }

  & span {
    /* color: #8a8a8a; */
    color: #44444b;
    transition: all 100ms linear;
  }

  &:hover {
    /* background-color: #f7f7f7; */
    background-color: #e5f3f6;
    transition: all 100ms linear;

    & span {
      /* color: #1990fe; */
      color: #008ba3;
      transition: all 100ms linear;
    }
  }
`;
