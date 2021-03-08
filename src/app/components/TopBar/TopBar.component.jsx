// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as TopNotificationIcon } from "../../../assets/img/icon/topbar-notification.svg";
import { ReactComponent as TopUserIcon } from "../../../assets/img/icon/topbar-user.svg";
import { ReactComponent as TopDownarrowIcon } from "../../../assets/img/icon/topbar-downarrow.svg";

// Import: Elements
import {
  Container,
  Info,
  OptionInfo,
  OptionItem,
  Options,
  Wrapper,
} from "./TopBar.elements";

// Component: TopBar
export default function TopBar() {
  return (
    <>
      <Container data-testid={"topbar"}>
        <Wrapper>
          <Options>
            <OptionItem>
              <TopNotificationIcon />
            </OptionItem>

            <OptionItem>
              <TopUserIcon />
              <OptionInfo>
                <Info>
                  <span>John Smith</span>
                  <span>Clinician</span>
                </Info>
                <TopDownarrowIcon />
              </OptionInfo>
            </OptionItem>
          </Options>
        </Wrapper>
      </Container>
    </>
  );
}
