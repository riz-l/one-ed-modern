// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Elements
import { Container } from "./Home.elements";

// Page: Home
export default function Home() {
  return (
    <>
      <Container data-testid={"home"}>
        <h1>HOME</h1>
        <Link to="/dashboard">Dashboard</Link>
      </Container>
    </>
  );
}
