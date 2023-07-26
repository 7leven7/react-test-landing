import { FunctionComponent } from "react";
import styled from "styled-components";

const GooglePlayIcon = styled.img`
  position: relative;
  width: 125px;
  height: 38px;
  object-fit: cover;
`;
const AppStoreIcon = styled.img`
  position: relative;
  width: 125px;
  height: 39px;
  object-fit: cover;
`;
const GooglePlayParent = styled.div`
  position: absolute;
  top: 16px;
  left: 1068px;
  width: 262px;
  height: 39px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
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
`;
const LogoIcon = styled.img`
  position: relative;
  width: 28px;
  height: 28.31px;
`;
const TourWhisperer = styled.div`
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
  font-size: var(--font-size-5xl);
`;
const NavRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--off-black);
  width: 1440px;
  height: 72px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--white);
  font-family: var(--font-rubik);
`;
const Header: FunctionComponent = () => {
  return (
    <NavRoot>
      <GooglePlayParent>
        <GooglePlayIcon alt="" src="/google-play@2x.png" />
        <AppStoreIcon alt="" src="/app-store@2x.png" />
      </GooglePlayParent>
      <FeaturesParent>
        <Features>Features</Features>
        <Features>Team</Features>
        <Features>About</Features>
      </FeaturesParent>
      <Logo>
        <LogoIcon alt="" src="/logo-icon.svg" />
        <TourWhisperer>Tour Whisperer</TourWhisperer>
      </Logo>
    </NavRoot>
  );
};

export default Header;
