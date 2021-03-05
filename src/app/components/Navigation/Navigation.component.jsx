// Import: Packages
import React from "react";

// Import: Assets
import { ReactComponent as WardDashboardIcon } from "../../../assets/img/icon/ward-dashboard.svg";
import { ReactComponent as WardEDIcon } from "../../../assets/img/icon/ward-ed.svg";
import { ReactComponent as PatientOverviewIcon } from "../../../assets/img/icon/patient-overview.svg";
import { ReactComponent as PatientCasIcon } from "../../../assets/img/icon/patient-cas.svg";
import { ReactComponent as AssessmentsTriageIcon } from "../../../assets/img/icon/assessments-triage.svg";
import { ReactComponent as AssessmentsObservationsIcon } from "../../../assets/img/icon/assessments-observations.svg";
import { ReactComponent as AssessmentsSeenIcon } from "../../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as AssessmentsClinicalIcon } from "../../../assets/img/icon/assessments-clinical.svg";
import { ReactComponent as AssessmentsViewIcon } from "../../../assets/img/icon/assessments-view.svg";
import { ReactComponent as TrainingGuidelinesIcon } from "../../../assets/img/icon/training-guidelines.svg";
import { ReactComponent as SettingsSettingsIcon } from "../../../assets/img/icon/settings-settings.svg";
import { ReactComponent as SettingsLogoutIcon } from "../../../assets/img/icon/settings-logout.svg";

// Import: Elements
import {
  Container,
  Logo,
  OptionContainer,
  OptionHeading,
  OptionItem,
  Options,
  Settings,
  SettingsItem,
  Wrapper,
} from "./Navigation.elements";

// Component: Navigation
export default function Navigation() {
  return (
    <>
      <Container>
        <Wrapper>
          {/* Logo */}
          <Logo>
            <span>OneED</span>
          </Logo>

          {/* Navigation Options */}
          <Options>
            {/* Ward */}
            <OptionContainer>
              <OptionHeading>Ward</OptionHeading>
              <OptionItem>
                <WardDashboardIcon />
                <span>Dashboard</span>
              </OptionItem>

              <OptionItem>
                <WardEDIcon />
                <span>ED Overview</span>
              </OptionItem>
            </OptionContainer>

            {/* Patient */}
            <OptionContainer>
              <OptionHeading>Patient</OptionHeading>
              <OptionItem>
                <PatientOverviewIcon />
                <span>Overview</span>
              </OptionItem>

              <OptionItem>
                <PatientCasIcon />
                <span>CAS Card</span>
              </OptionItem>
            </OptionContainer>

            {/* Assessments */}
            <OptionContainer>
              <OptionHeading>Assessments</OptionHeading>
              <OptionItem>
                <AssessmentsTriageIcon />
                <span>Triage</span>
              </OptionItem>

              <OptionItem>
                <AssessmentsObservationsIcon />
                <span>Observations</span>
              </OptionItem>

              <OptionItem>
                <AssessmentsSeenIcon />
                <span>Seen</span>
              </OptionItem>

              <OptionItem>
                <AssessmentsClinicalIcon />
                <span>Clinical Notes</span>
              </OptionItem>

              <OptionItem>
                <AssessmentsViewIcon />
                <span>View Seen</span>
              </OptionItem>
            </OptionContainer>

            {/* Training */}
            <OptionContainer>
              <OptionHeading>Training</OptionHeading>
              <OptionItem>
                <TrainingGuidelinesIcon />
                <span>Guidelines</span>
              </OptionItem>
            </OptionContainer>
          </Options>

          <Settings>
            <SettingsItem>
              <SettingsSettingsIcon />
              <span>Settings</span>
            </SettingsItem>

            <SettingsItem>
              <SettingsLogoutIcon />
              <span>Log Out</span>
            </SettingsItem>
          </Settings>
        </Wrapper>
      </Container>
    </>
  );
}
