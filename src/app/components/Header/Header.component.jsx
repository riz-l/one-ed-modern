// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Assets
import { ReactComponent as UserSvg } from "../../../assets/img/icon/topbar-user.svg";

// Import: Elements
import {
  Container,
  Logo,
  LogoContainer,
  UserContainer,
  UserDetails,
  UserIcon,
  Wrapper,
} from "./Header.elements";

// Component: Header
export default function Header() {
  return (
    <>
      <Container data-testid={"header"}>
        <Wrapper>
          <LogoContainer>
            <Link to="/">
              <Logo>
                <span>OneED</span>
              </Logo>
            </Link>
          </LogoContainer>

          <UserContainer>
            <UserIcon>
              <UserSvg />
            </UserIcon>

            <UserDetails>
              <span>Jane Doe</span>
              <span>Clinician</span>
            </UserDetails>
          </UserContainer>
        </Wrapper>
      </Container>
    </>
  );
}
