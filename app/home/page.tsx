import React from 'react'
import HeroSection from './HeroSection'
import Testimonials from './Testimonials'
import MobileTemplates from './MobileTemplates'
import StandOut from './StandOut'
import SubFooter from './SubFooter'
import Marquee from './Marquee'
import CreativeWebsites from './CreativeWebsites'
import Branding from './Branding'
import Optimize from './Optimize'

const Page = () => {
  return (
   <div>
    <HeroSection/>
    <CreativeWebsites/>
    <Branding/>
    <Optimize/>
    <MobileTemplates/>
    <StandOut/>
    <Testimonials/>
    <Marquee/>
    <SubFooter/>
   </div>
  )
}

export default Page