import HeroSection from '../components/sections/hero-section'
import FeatureSection from '../components/sections/feature-section'
import EarlyAccessSection from '../components/sections/early-access-section'
import FooterSection from '../components/sections/footer-section'

export default function Home() {
  return (
    <div className="content flex flex-col self-center">

      <HeroSection />
      <FeatureSection />
      <EarlyAccessSection />
      <FooterSection />
    </div>

  )
}