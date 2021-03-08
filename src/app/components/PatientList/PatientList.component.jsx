// Import: Packages
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { allPatientDetails } from "../../../utils/axios";
import { useTable } from "react-table";

// Import: Elements
import { Container, Wrapper } from "./PatientList.elements";

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

  console.log(tableData);

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
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <table
              {...getTableProps()}
              style={{
                width: "100%",
                padding: "0 2rem 2rem 2rem",
              }}
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        style={{
                          borderBottom: "3px solid red",
                          background: "aliceblue",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              padding: "10px",
                              border: "1px solid gray",
                              background: "papayawhip",
                            }}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </Wrapper>
      </Container>
    </>
  );
}
