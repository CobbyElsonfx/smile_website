import Hero from '../components/Hero'
import Button from '../components/shared/Button'
import GetStartedSection from '../components/sections/GetStartedSection'
import StatsSection from '../components/sections/StatsSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import AdminFeaturesSection from '../components/sections/AdminFeaturesSection'

const Home = () => {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      <Hero/>
      <GetStartedSection />
      <StatsSection />
      <FeaturesSection />
      <AdminFeaturesSection />
    
      <section className="bg-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose SMILE?</h2>
            <p className="mb-8 text-lg">
              SMILE is designed for forward-thinking institutions that want to save time, reduce errors, and improve communication while enhancing the educational experience for students, staff, and parents.
            </p>
            <p className="text-xl italic mb-8">
              Your School, Your Control—All in One Place.
            </p>
            <Button variant="outline" className="text-lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
