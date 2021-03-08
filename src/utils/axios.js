// Import: Dependencies
import axios from "axios";

// Referencing .env parameter
const apiUrl = process.env.REACT_APP_API_URL;

// GET: /PatientDetails
export const allPatientDetails = axios.create({
  baseURL: `${apiUrl}/PatientDetails`,
});

// GET: /PatientDetails/ePRID/
export const patientDetails = axios.create({
  baseURL: `${apiUrl}/PatientDetails/ePRID/`,
});
