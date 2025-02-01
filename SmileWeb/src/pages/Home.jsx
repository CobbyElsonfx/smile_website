import Hero from '../components/Hero'
import Button from '../components/shared/Button'
import GetStartedSection from '../components/sections/GetStartedSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import AdminFeaturesSection from '../components/sections/AdminFeaturesSection'
import Features from '../components/sections/Features'
import Footer from '../components/sections/Footer'
import ParentFeatures from '../components/sections/ParentFeatures'
import TeacherFeaturesSection from '../components/sections/TeacherFeaturesSection'
import StudentFeaturesSection from '../components/sections/StudentFeaturesSection'
import ChatbotComponent from '../components/chatbot/Chatbot'
import ContactSection from '../components/sections/ContactSection'

const Home = () => {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      <div id="home">
        <Hero/>
      </div>

      <GetStartedSection />

      <div id="features">
        <Features/>
        <AdminFeaturesSection />
        <TeacherFeaturesSection />
        <StudentFeaturesSection />
        <ParentFeatures />
      </div>

      <ContactSection />
      <Footer />
      <ChatbotComponent />
    </div>
  )
}

export default Home
