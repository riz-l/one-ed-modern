// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  /* background-color: #f4f4f4; */
  border-radius: 8px;
  cursor: pointer;
  height: auto;
  min-height: 80px;
  margin-bottom: 0.4rem;
  transition: all 100ms linear;
  width: 100%;

  &:hover {
    /* background-color: #b5bec8; */
    background-color: #e5f3f6;
    transition: all 100ms linear;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  padding: 0.8rem;
  width: 100%;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  /* background: red; */

  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

// Element: DetailContainer
export const DetailContainer = styled.div`
  align-items: flex-start;
  /* border-right: 1px solid #008ba3; */
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 0.8rem;

  &:last-of-type {
    border-right: none;
  }
`;

// Element: Name
export const Name = styled.span`
  color: #44444b;
  font-size: 1.2rem;
  font-weight: 500;
`;
