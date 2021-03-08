// Import: Packages
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { allPatientDetails } from "../../../utils/axios";
import { useTable } from "react-table";

// Import: Elements
import {
  Container,
  Header,
  Table,
  TableData,
  TableDataRow,
  TableHeading,
  TableWrapper,
  Wrapper,
} from "./PatientList.elements";

// Component: PatientList
export default function PatientList() {
  // State: isLoading, tableData
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  // Effect: Fetches table data from API
  useEffect(() => {
    async function getTableData() {
      setIsLoading(true);

      axios
        .all([allPatientDetails.get(``, {})])
        .then(
          axios.spread((allPatientDetailsRes) => [
            setTableData(allPatientDetailsRes.data),
            setIsLoading(false),
          ])
        )
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
          throw new Error(error);
        });
    }

    getTableData();
  }, []);

  // columns: columns from API
  const columns = useMemo(
    () => [
      {
        Header: "Firstname",
        accessor: (patient) =>
          patient.PD_Firstname === "" ? "N/A" : patient.PD_Firstname,
      },
      {
        Header: "Surname",
        accessor: (patient) =>
          patient.PD_Surname === "" ? "N/A" : patient.PD_Surname,
      },
      {
        Header: "Age",
        accessor: (patient) =>
          patient.PD_Age_Yrs === "" ? "N/A" : patient.PD_Age_Yrs,
      },
      {
        Header: "Date of Birth",
        accessor: (patient) => (patient.PD_DOB === "" ? "N/A" : patient.PD_DOB),
      },
      {
        Header: "Condition",
        accessor: (patient) =>
          patient.PD_Reported_Condition === ""
            ? "N/A"
            : patient.PD_Reported_Condition,
      },
    ],
    []
  );

  // data: tableData from API
  const data = tableData;

  // Table: Accepts columns and data
  const tableInstance = useTable({ columns, data });

  // Destructures all hooks needed by the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <>
      <Container data-testid={"patientList"}>
        <Wrapper>
          <Header>
            <h2>Patient List</h2>
          </Header>

          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <TableWrapper>
              <Table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <TableHeading {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </TableHeading>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <TableDataRow {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <TableData {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </TableData>
                          );
                        })}
                      </TableDataRow>
                    );
                  })}
                </tbody>
              </Table>
            </TableWrapper>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
