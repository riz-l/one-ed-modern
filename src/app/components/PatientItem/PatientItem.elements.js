// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.article`
  background-color: #ffffff;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  margin-bottom: 0.4rem;
  padding: 1rem;
  transition: all 100ms linear;
  width: 100%;

  &:hover {
    background-color: rgba(0, 211, 255, 0.1);
    transition: all 100ms linear;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  align-items: center;
  /* background-color: red; */
  flex-direction: column;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-right: 0.8rem;
`;

// Element: DetailsContainer
export const DetailsContainer = styled.div`
  align-items: center;
  /* background-color: red; */
  flex-direction: column;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-right: 0.8rem;

  &:last-of-type {
    margin-right: 0;
  }
`;
