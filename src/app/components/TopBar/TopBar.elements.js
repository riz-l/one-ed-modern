// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: auto;
  max-height: auto;
  min-height: auto;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  width: 100%;
`;

// Element: Options
export const Options = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding: 0.8rem 1rem;
  width: 100%;
`;

// Element: OptionItem
export const OptionItem = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  transition: all 100ms linear;
  width: auto;

  & svg {
    fill: #8a8a8a;
    height: 35px;
    width: 35px;
  }

  &:hover {
    background-color: #f7f7f7;
    transition: all 100ms linear;
  }
`;

// Element: OptionInfo
export const OptionInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 0.8rem;

  & svg {
    fill: #8a8a8a;
    height: 15px;
    width: 15px;
  }
`;

// Element: Info
export const Info = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0.8rem;

  & span:nth-child(1) {
    color: #515a62;
    font-weight: 500;
    margin-bottom: -4px;
  }

  & span:nth-child(2) {
    color: #8a8a8a;
    font-size: 0.8rem;
  }
`;
