// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  height: 100%;
  max-height: calc(100vh - 78.4px);
  min-height: calc(100vh - 78.4px);
  width: 100%;
  min-width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 78.4px);
  min-height: calc(100vh - 78.4px);
  justify-content: flex-start;
  width: 100%;
`;

// Element: Header
export const Header = styled.div`
  align-items: flex-start;
  display: flex;
  height: auto;
  justify-content: flex-start;
  width: 100%;

  & h2 {
    font-size: 1.6rem;
    font-weight: 500;
    padding: 2rem;
  }
`;

// Element: DetailsWrapper
export const DetailsWrapper = styled.div`
  height: 100%;
  margin-bottom: 2rem;
  overflow-y: auto;
  padding: 0 2rem 2rem 2rem;
  width: 100%;
`;

// Element: SummaryContainer
export const SummaryContainer = styled.div`
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: SummaryHeader
export const SummaryHeader = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 4px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  width: 100%;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  margin-right: 1rem;

  & svg {
    background: #ffffff;
    border-radius: 8px;
    fill: #8a8a8a;
    height: 80px;
    padding: 0.8rem;
    width: 80px;
  }
`;

// Element: NameContainer
export const NameContainer = styled.div`
  align-items: flex-start;
  color: #515a62;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  & h3 {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

// Element: SummaryDetails
export const SummaryDetails = styled.div`
  align-items: flex-start;
  background: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;
