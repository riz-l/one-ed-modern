// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.nav`
  /* background-color: #ffffff; */
  background-color: #f7f8fa;
  /* border-right: 1px solid rgba(0, 0, 0, 0.1); */
  border-right: 1px solid #edeff2;
  height: calc(100vh - 80px);
  width: 300px;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem 2rem;
  width: 100%;
`;

// Element: Options
export const Options = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

// Element: OptionsContainer
export const OptionsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0.8rem;
  width: 100%;
`;

// Element: OptionHeading
export const OptionHeading = styled.span`
  color: #6b7a99;
  padding: 0.4rem 0;
  font-weight: 500;
  text-transform: uppercase;
`;

// Element: OptionItem
export const OptionItem = styled.div`
  align-items: center;
  /* background-color: #ffffff; */
  background-color: #f7f8fa;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 0.4rem 0.8rem;
  transition: all 100ms linear;
  width: 100%;

  & svg {
    /* fill: #44444b; */
    fill: #c3cad9;
    height: 20px;
    margin-right: 0.8rem;
    transition: all 100ms linear;
    width: 20px;
  }

  & span {
    /* color: #44444b; */
    /* color: #c3cad9; */
    color: #6b7a99;
    transition: all 100ms linear;
  }

  &:hover {
    /* background-color: #e5f3f6; */
    background-color: #e6e9ef;
    transition: all 100ms linear;

    & svg {
      fill: #6b7a99;
      transition: all 100ms linear;
    }

    & span {
      color: #4d5e80;
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
  /* background-color: #ffffff; */
  background-color: #f7f8fa;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 0.4rem 0.8rem;
  transition: all 100ms linear;
  width: 100%;

  & svg {
    /* fill: #44444b; */
    fill: #c3cad9;
    height: 20px;
    margin-right: 0.8rem;
    transition: all 100ms linear;
    width: 20px;
  }

  & span {
    /* color: #44444b; */
    color: #6b7a99;
    transition: all 100ms linear;
  }

  &:hover {
    /* background-color: #e5f3f6; */
    background-color: #e6e9ef;
    transition: all 100ms linear;

    & svg {
      fill: #6b7a99;
      transition: all 100ms linear;
    }

    & span {
      /* color: #008ba3; */
      color: #4d5e80;
      transition: all 100ms linear;
    }
  }
`;
