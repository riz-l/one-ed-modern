// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.section`
  background-color: #f7f8fa;
  height: 100%;
  max-height: auto;
  min-height: calc((100vh - 80px) / 2);
  width: 100%;
`;

// Element: Header
export const Header = styled.div`
  align-items: flex-start;
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 1rem 2rem;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;

  & h2 {
    color: #4d5e80;
    font-size: 1.6rem;
    font-weight: 500;
  }

  & span {
    color: #6b7a99;
    font-size: 0.8rem;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  background-color: #f7f8fa;
  height: 100%;
  width: 100%;
`;
