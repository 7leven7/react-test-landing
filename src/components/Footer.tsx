import { FunctionComponent } from "react";
import styled from "styled-components";

const TourWhisperer = styled.div`
  position: absolute;
  top: 20px;
  left: calc(50% + 297px);
  line-height: 32px;
  font-weight: 300;
`;
const Tourwhisperermailcom = styled.div`
  position: absolute;
  top: 20px;
  left: calc(50% + 71px);
  line-height: 32px;
  font-weight: 500;
`;
const Features = styled.div`
  position: relative;
  line-height: 28px;
`;
const FeaturesParent = styled.div`
  position: absolute;
  top: 22px;
  left: calc(50% - 248px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  text-align: left;
`;
const LogoIcon = styled.img`
  position: relative;
  width: 28px;
  height: 28.31px;
`;
const TourWhisperer1 = styled.div`
  position: relative;
  line-height: 36px;
  font-weight: 500;
`;
const Logo = styled.div`
  position: absolute;
  top: 18px;
  left: 104px;
  width: 203px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-11xs);
  text-align: left;
  font-size: var(--font-size-5xl);
`;
const NavRoot = styled.div`
  position: absolute;
  top: 2775px;
  left: 0px;
  background-color: var(--color-gray);
  width: 1440px;
  height: 72px;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--white);
  font-family: var(--font-rubik);
`;
const Footer: FunctionComponent = () => {
  return (
    <NavRoot>
      <TourWhisperer>Tour Whisperer © 2023 - All Rights Reserved</TourWhisperer>
      <Tourwhisperermailcom>tourwhisperer@mail.com</Tourwhisperermailcom>
      <FeaturesParent>
        <Features>Features</Features>
        <Features>Team</Features>
        <Features>About</Features>
      </FeaturesParent>
      <Logo>
        <LogoIcon alt="" src="/logo-icon1.svg" />
        <TourWhisperer1>Tour Whisperer</TourWhisperer1>
      </Logo>
    </NavRoot>
  );
};

export default Footer;
