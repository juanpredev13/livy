import HeroSection from '../components/sections/hero-section'
import FeatureSection from '../components/sections/feature-section'
import FooterSection from '../components/sections/footer-section'





export default function Home() {
  return (
    <div className="content flex flex-col self-center">

      <HeroSection />
      <FeatureSection />
      <FooterSection />
    </div>

  )
}