'use client'

import { ConfirmSection } from "../ConfirmSection/ConfirmSection"
import { CountDownSection } from "../CountDownSection/CountDownSection"
import { HeroSection } from "../HeroSection/HeroSection"
import { PhraseSection } from "../PhraseSection/PhraseSection"
import { PlaceSection } from "../PlaceSection/PlaceSection"


import { isMobile } from "react-device-detect";


export const MainPage = () => {
  return <>
    <HeroSection isMobile={isMobile} />
    <CountDownSection />
    <PlaceSection />
    {/* <SliderSection /> */}
    <PhraseSection />
    <ConfirmSection />
    {/* <FooterSection /> */}
  </>
} 