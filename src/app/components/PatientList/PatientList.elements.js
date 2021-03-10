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

// Element: Wrapper
export const Wrapper = styled.div`
  /* background-color: #ffffff; */
  background-color: #f7f8fa;
  /* border-radius: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15); */
  height: 100%;
  width: 100%;
`;

// Element: Header
export const Header = styled.div`
  align-items: flex-start;
  /* background-color: #ffffff; */
  background-color: #f7f8fa;
  /* box-shadow: 0 0 20px #edeff2; */
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  padding: 1.8rem 2rem 2rem 2rem;
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

// Element: ItemContainer
export const ItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 2rem;
  width: 100%;
`;
