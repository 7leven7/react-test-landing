import { FunctionComponent } from "react";
import styled from "styled-components";

const CheckOutSome = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-21xl);
  line-height: 48px;
  font-weight: 600;
  display: inline-block;
  width: 525px;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 152px;
  left: 0px;
  border-radius: var(--br-9xs);
  background: linear-gradient(143.23deg, #fa485e, #fb6645);
  width: 32px;
  height: 32px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 260px;
  left: 0px;
  border-radius: var(--br-9xs);
  background: linear-gradient(143.23deg, #fa485e, #fb6645);
  width: 32px;
  height: 32px;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 368px;
  left: 0px;
  border-radius: var(--br-9xs);
  background: linear-gradient(143.23deg, #fa485e, #fb6645);
  width: 32px;
  height: 32px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 476px;
  left: 0px;
  border-radius: var(--br-9xs);
  background: linear-gradient(143.23deg, #fa485e, #fb6645);
  width: 32px;
  height: 32px;
`;
const TextToSpeech = styled.div`
  position: absolute;
  top: 152px;
  left: calc(50% - 218.5px);
  line-height: 28px;
  font-weight: 600;
  display: inline-block;
  width: 247.38px;
`;
const GetDiscount = styled.div`
  position: absolute;
  top: 260px;
  left: calc(50% - 218.5px);
  line-height: 28px;
  font-weight: 600;
  display: inline-block;
  width: 247.38px;
`;
const MakeAPlan = styled.div`
  position: absolute;
  top: 368px;
  left: calc(50% - 218.5px);
  line-height: 28px;
  font-weight: 600;
  display: inline-block;
  width: 247.38px;
`;
const DarkMode = styled.div`
  position: absolute;
  top: 476px;
  left: calc(50% - 218.5px);
  line-height: 28px;
  font-weight: 600;
  display: inline-block;
  width: 247.38px;
`;
const LoremIpsumIs = styled.div`
  position: absolute;
  top: 188px;
  left: calc(50% - 218.5px);
  font-size: var(--font-size-base);
  line-height: 24px;
  display: inline-block;
  width: 304px;
`;
const LoremIpsumIs1 = styled.div`
  position: absolute;
  top: 296px;
  left: calc(50% - 218.5px);
  font-size: var(--font-size-base);
  line-height: 24px;
  display: inline-block;
  width: 304px;
`;
const LoremIpsumIs2 = styled.div`
  position: absolute;
  top: 404px;
  left: calc(50% - 218.5px);
  font-size: var(--font-size-base);
  line-height: 24px;
  display: inline-block;
  width: 304px;
`;
const LoremIpsumIs3 = styled.div`
  position: absolute;
  top: 512px;
  left: calc(50% - 218.5px);
  font-size: var(--font-size-base);
  line-height: 24px;
  display: inline-block;
  width: 304px;
`;
const DiscountIcon = styled.img`
  position: absolute;
  top: 266px;
  left: 6px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const FluentpersonVoice24RegularIcon = styled.img`
  position: absolute;
  top: 158px;
  left: 6px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const PlanningTimeEvent241 = styled.img`
  position: absolute;
  height: 3.57%;
  width: 3.81%;
  top: 66.79%;
  right: 95.05%;
  bottom: 29.64%;
  left: 1.14%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const MoonIcon = styled.img`
  position: absolute;
  top: 482px;
  left: 6px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const CheckOutSomeOfOurAmazingParentRoot = styled.div`
  position: absolute;
  top: 803px;
  left: 112px;
  width: 525px;
  height: 560px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--off-black);
  font-family: var(--font-rubik);
`;
const FeatureCard: FunctionComponent = () => {
  return (
    <CheckOutSomeOfOurAmazingParentRoot>
      <CheckOutSome>Check out some of our amazing features</CheckOutSome>
      <FrameChild />
      <FrameItem />
      <FrameInner />
      <RectangleDiv />
      <TextToSpeech>Text to speech</TextToSpeech>
      <GetDiscount>Get discount</GetDiscount>
      <MakeAPlan>Make a plan</MakeAPlan>
      <DarkMode>Dark mode</DarkMode>
      <LoremIpsumIs>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </LoremIpsumIs>
      <LoremIpsumIs1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </LoremIpsumIs1>
      <LoremIpsumIs2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </LoremIpsumIs2>
      <LoremIpsumIs3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </LoremIpsumIs3>
      <DiscountIcon alt="" src="/discount-icon.svg" />
      <FluentpersonVoice24RegularIcon
        alt=""
        src="/fluentpersonvoice24regular.svg"
      />
      <PlanningTimeEvent241 alt="" src="/planning--time--event--241.svg" />
      <MoonIcon alt="" src="/moon-icon.svg" />
    </CheckOutSomeOfOurAmazingParentRoot>
  );
};

export default FeatureCard;
