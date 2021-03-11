// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background-color: #f7f8fa;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  overflow-y: auto;
  scrollbar-color: #c3cad9 #edeff2;
  scrollbar-width: thin;
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
  /* background-color: #ffffff; */
  background-color: #f7f8fa;
  /* border-radius: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15); */
  height: 100%;
  width: 100%;
`;

// Element: ItemContainer
export const ItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 2rem;
  width: 100%;
`;
