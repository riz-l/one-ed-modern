// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  height: 100%;
  max-height: calc(100vh - 78.4px);
  min-height: calc(100vh - 78.4px);
  padding: 0 2rem;
  overflow-y: auto;
  width: 100%;
`;

// Element: Header
export const Header = styled.div`
  background: #ffffff;
  padding: 2rem 0;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;

  & h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
