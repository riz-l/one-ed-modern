// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  height: 100%;
  max-height: 100vh;
  min-height: 100vh;
  width: 100%;
`;

// Element: Layout
export const Layout = styled.main`
  display: flex;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  width: 100%;
`;

// Element: ListContainer
export const ListContainer = styled.section`
  align-items: center;
  display: flex;
  flex: 1.5;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  justify-content: center;
  width: 100%;
`;

// Element: WorkflowContainer
export const WorkflowContainer = styled.section`
  align-items: center;
  background-color: rgba(255, 0, 0, 0.1);
  /* background-color: #f7f8fa; */
  display: flex;
  flex: 3;
  height: 100%;
  max-height: calc(100vh - 80px);
  min-height: calc(100vh - 80px);
  justify-content: center;
  width: 100%;
`;
