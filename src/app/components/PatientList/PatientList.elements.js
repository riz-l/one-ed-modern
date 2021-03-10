// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  overflow-y: auto;
  scrollbar-color: #2a2a2e #c1c1c1;
  scrollbar-width: thin;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  background-color: #ffffff;
  /* border-radius: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15); */
  height: 100%;
  width: 100%;
`;

// Element: Header
export const Header = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  padding: 2rem;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;

  & h2 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  & span {
    font-size: 0.8rem;
  }
`;

// Element: ItemContainer
export const ItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 2rem;
  width: 100%;

  & div {
    align-items: center;
    background-color: rgba(0, 211, 255, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0.4rem;
    padding: 2rem;
    width: 100%;
  }
`;
