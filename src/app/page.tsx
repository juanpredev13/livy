import HeroSection from '../components/sections/hero-section'
import FeatureSection from '../components/sections/feature-section'
import DashboardSection from '../components/sections/dashboard-section'
import Section from '../components/sections/section'
import FooterSection from '../components/sections/footer-section'





export default function Home() {
  return (
    <div className="content flex flex-col self-center">

      <HeroSection />
      <FeatureSection />

      {/* <DashboardSection /> */}
      <FooterSection />
    </div>

  )
}