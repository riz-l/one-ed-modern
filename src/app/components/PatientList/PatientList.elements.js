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
  background-color: #ffffff;
  display: flex;
  height: auto;
  justify-content: flex-start;
  width: 100%;

  & h2 {
    font-size: 2rem;
    font-weight: 500;
    padding: 2rem;
  }
`;

// Element: TableWrapper
export const TableWrapper = styled.div`
  height: 100%;
  margin-bottom: 2rem;
  overflow-y: auto;
  /* padding: 0 2rem 2rem 2rem; */
  padding: 0 0 2rem 2rem;
  width: 100%;
`;

// Element: Table
export const Table = styled.table`
  border-collapse: collapse;
  height: 100%;
  text-align: left;
  width: 100%;
`;

// Element: TableDataRow
export const TableDataRow = styled.tr`
  background-color: #ffffff;
  cursor: pointer;
  transition: all 100ms linear;

  &:hover {
    background-color: rgb(0, 139, 163, 0.2);
    transition: all 100ms linear;
  }

  &:nth-child(even) {
    background-color: #f7f7f7;
    transition: all 100ms linear;

    &:hover {
      background-color: rgb(0, 139, 163, 0.2);
      transition: all 100ms linear;
    }
  }
`;

// Element: TableHeading
export const TableHeading = styled.th`
  background-color: #f1f1f1;
  font-weight: bold;
  padding: 0.8rem;
  position: sticky;
  top: 0;
`;

// Element: TableData
export const TableData = styled.td`
  padding: 0.8rem;
`;
