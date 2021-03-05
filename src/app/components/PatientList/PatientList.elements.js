// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  height: 100%;
  padding: 1rem 2rem;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  background: #f7f7f7;
  border-radius: 8px;
  height: 100%;
  padding: 0.8rem 2rem;
  width: 100%;

  & h2 {
    color: #515a62;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }
`;

// Element: TableWrapper
export const TableWrapper = styled.div`
  max-height: 72vh;
  overflow-y: auto;
`;

// Element: Table
export const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
`;

// Element: TableRow
export const TableRow = styled.tr``;

// Element: TableHead
export const TableHead = styled.thead``;

// Element: TableHeading
export const TableHeading = styled.th`
  color: #515a62;
  text-align: left;
  width: auto;
  &:nth-child(4) {
    width: 15%;
  }

  &:nth-child(5) {
    width: 15%;
  }
`;

// Element: TableBody
export const TableBody = styled.tbody``;

// Element: TableDataRow
export const TableDataRow = styled.tr`
  cursor: pointer;

  &:hover {
    background: #c1c1c1;
  }
`;

// Element: TableData
export const TableData = styled.td`
  color: #8a8a8a;
  padding: 0.8rem 0;
  text-align: left;
`;
