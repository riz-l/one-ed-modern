// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  height: auto;
  max-height: calc(100vh - 10vh);
  width: 100%;
`;

// Element: Heading
export const Heading = styled.div`
  padding: 0 2rem;
  width: 100%;

  & h1 {
    color: #515a62;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: ListWrapper
export const ListWrapper = styled.div`
  flex: 1.75;
  height: 100%;
  width: 100%;
`;

// Element: SummaryWrapper
export const SummaryWrapper = styled.div`
  background-color: rebeccapurple;
  flex: 1;
  height: 100%;
  width: 100%;
`;
