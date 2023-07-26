import { FunctionComponent } from "react";
import styled from "styled-components";
import FeatureCard from "../components/FeatureCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingDesktopChild = styled.img`
  position: absolute;
  top: 693px;
  left: calc(50% - 720px);
  width: 1440px;
  height: 780px;
`;
const FeaturesSectionImageIcon = styled.img`
  position: absolute;
  top: 490.86px;
  left: 530.94px;
  width: 909.06px;
  height: 1257.84px;
  object-fit: cover;
`;
const LandingDesktopItem = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 720px);
  background-color: var(--dark-mode-lightest);
  width: 1440px;
  height: 693px;
`;
const Pngwing1Icon = styled.img`
  position: absolute;
  top: 503px;
  left: calc(50% - 620px);
  width: 225px;
  height: 94px;
  object-fit: cover;
`;
const Pngwing2Icon = styled.img`
  position: absolute;
  top: 523px;
  left: calc(50% - 399px);
  width: 225px;
  height: 76px;
  object-fit: cover;
`;
const LandingDesktopInner = styled.div`
  position: absolute;
  top: 1473px;
  left: calc(50% - 720px);
  background-color: var(--dark-mode-lightest);
  width: 1440px;
  height: 800px;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 2273px;
  left: calc(50% - 720px);
  width: 1440px;
  height: 502px;
`;
const DownloadApp = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 500;
`;
const DownloadAppWrapper = styled.div`
  position: absolute;
  top: 48px;
  left: 1174px;
  border-radius: 32px;
  background: linear-gradient(143.23deg, #fa485e, #fb6645);
  display: none;
  flex-direction: row;
  padding: 8px 24px;
  align-items: center;
  justify-content: center;
  text-align: left;
`;
const FrameChild = styled.div`
  position: relative;
  background: linear-gradient(143.23deg, #fa485e, #fb6645);
  width: 8px;
  height: 14px;
`;
const AvailableOnAndroid = styled.div`
  position: relative;
  line-height: 28px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 171px;
  left: 112px;
  width: 277px;
  height: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  text-align: left;
`;
const PersonalizedAndInteractive = styled.div`
  position: absolute;
  top: 215px;
  left: 112px;
  font-size: 48px;
  line-height: 56px;
  text-align: left;
  display: inline-block;
  width: 644px;
`;
const Founders = styled.div`
  position: absolute;
  top: 1545px;
  left: calc(50% - 87px);
  font-size: var(--font-size-19xl);
  line-height: 48px;
  font-weight: 500;
`;
const OurStory = styled.div`
  position: absolute;
  top: 2345px;
  left: calc(50% - 87px);
  font-size: var(--font-size-19xl);
  line-height: 48px;
  font-weight: 500;
`;
const UserFriendlyInterfaceFor = styled.div`
  position: absolute;
  top: 399px;
  left: 112px;
  line-height: 32px;
  font-weight: 300;
  text-align: left;
  display: inline-block;
  width: 644px;
`;
const LoremIpsumIs = styled.div`
  position: absolute;
  top: 1641px;
  left: calc(50% - 322px);
  line-height: 32px;
  display: inline-block;
  width: 644px;
`;
const LoremIpsumIs1 = styled.div`
  position: absolute;
  top: 2441px;
  left: calc(50% - 322px);
  line-height: 32px;
  display: inline-block;
  width: 644px;
`;
const BrankoKragovic = styled.div`
  position: absolute;
  top: 2121px;
  left: calc(50% - 475px);
  font-size: var(--font-size-9xl);
  line-height: 32px;
`;
const BrankoKragovic1 = styled.div`
  position: absolute;
  top: 2121px;
  left: calc(50% - 105px);
  font-size: var(--font-size-9xl);
  line-height: 32px;
`;
const BrankoKragovic2 = styled.div`
  position: absolute;
  top: 2121px;
  left: calc(50% + 265px);
  font-size: var(--font-size-9xl);
  line-height: 32px;
`;
const Ceo = styled.div`
  position: absolute;
  top: 2169px;
  left: calc(50% - 393px);
  font-size: var(--font-size-5xl);
  line-height: 32px;
  font-weight: 300;
`;
const Ceo1 = styled.div`
  position: absolute;
  top: 2169px;
  left: calc(50% - 23px);
  font-size: var(--font-size-5xl);
  line-height: 32px;
  font-weight: 300;
`;
const Ceo2 = styled.div`
  position: absolute;
  top: 2169px;
  left: calc(50% + 347px);
  font-size: var(--font-size-5xl);
  line-height: 32px;
  font-weight: 300;
`;
const HeaderImageIcon = styled.img`
  position: absolute;
  top: 0px;
  left: calc(50% + 57px);
  width: 711px;
  height: 654.6px;
  object-fit: cover;
`;
const EllipseIcon = styled.img`
  position: absolute;
  top: 1809px;
  left: 214px;
  border-radius: 50%;
  width: 272px;
  height: 272px;
  object-fit: cover;
`;
const LandingDesktopChild1 = styled.img`
  position: absolute;
  top: 1809px;
  left: 584px;
  border-radius: 50%;
  width: 272px;
  height: 272px;
  object-fit: cover;
`;
const LandingDesktopChild2 = styled.img`
  position: absolute;
  top: 1809px;
  left: 954px;
  border-radius: 50%;
  width: 272px;
  height: 272px;
  object-fit: cover;
`;
const Pngwing3Icon = styled.img`
  position: absolute;
  top: 2585px;
  left: calc(50% - 223px);
  width: 225px;
  height: 94px;
  object-fit: cover;
`;
const Pngwing4Icon = styled.img`
  position: absolute;
  top: 2605px;
  left: calc(50% - 2px);
  width: 225px;
  height: 76px;
  object-fit: cover;
`;
const LandingDesktopRoot = styled.div`
  position: relative;
  background-color: var(--dark-mode-lightest);
  width: 100%;
  height: 2847px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--white);
  font-family: var(--font-rubik);
`;
const LandingDesktop: FunctionComponent = () => {
  return (
    <LandingDesktopRoot>
      <LandingDesktopChild alt="" src="/rectangle-2.svg" />
      <FeaturesSectionImageIcon alt="" src="/features-section-image@2x.png" />
      <LandingDesktopItem />
      <Pngwing1Icon alt="" src="/pngwing-1@2x.png" />
      <Pngwing2Icon alt="" src="/pngwing-2@2x.png" />
      <LandingDesktopInner />
      <RectangleIcon alt="" src="/rectangle-6.svg" />
      <DownloadAppWrapper>
        <DownloadApp>Download App</DownloadApp>
      </DownloadAppWrapper>
      <RectangleParent>
        <FrameChild />
        <AvailableOnAndroid>Available on Android and iOS</AvailableOnAndroid>
      </RectangleParent>
      <PersonalizedAndInteractive>
        Personalized and interactive travel experiences based on your interest.
      </PersonalizedAndInteractive>
      <Founders>Founders</Founders>
      <OurStory>Our Story</OurStory>
      <UserFriendlyInterfaceFor>{`User-friendly interface for easy navigation and access to information.  Text-to-speech technology allows users to get descriptions of nearby places without resorting to a map or guidebook. `}</UserFriendlyInterfaceFor>
      <LoremIpsumIs>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,..
      </LoremIpsumIs>
      <LoremIpsumIs1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,..
      </LoremIpsumIs1>
      <BrankoKragovic>Branko Kragovic</BrankoKragovic>
      <BrankoKragovic1>Branko Kragovic</BrankoKragovic1>
      <BrankoKragovic2>Branko Kragovic</BrankoKragovic2>
      <Ceo>CEO</Ceo>
      <Ceo1>CEO</Ceo1>
      <Ceo2>CEO</Ceo2>
      <HeaderImageIcon alt="" src="/header-image@2x.png" />
      <FeatureCard />
      <EllipseIcon alt="" src="/ellipse-8@2x.png" />
      <LandingDesktopChild1 alt="" src="/ellipse-9@2x.png" />
      <LandingDesktopChild2 alt="" src="/ellipse-10@2x.png" />
      <Header />
      <Footer />
      <Pngwing3Icon alt="" src="/pngwing-1@2x.png" />
      <Pngwing4Icon alt="" src="/pngwing-2@2x.png" />
    </LandingDesktopRoot>
  );
};

export default LandingDesktop;
