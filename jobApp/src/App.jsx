import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header and Footer/Navbar';
import Carousel from './components/carouselData';
import Card from './components/Home page components/cards';
import Hero from './components/Home page components/Hero';
import PopularJobs from './components/Home page components/PopularJobs';
import CompanyList from './components/Home page components/CompanyList';
import FeaturesSection from './components/Home page components/FeaturesSection';
import JobCTA from './components/Home page components/JobCTA';
import Footer from './components/Header and Footer/Footer';
import Testimonials from './components/Home page components/Testimonials';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Auth component/Login';
import Signup from './components/Auth component/Signup';
import UserProfile from './components/Employee Profile/UserProfile';
import SkillCards from './components/Home page components/Skills';
import EmployerProfile from './components/Employer Profile/EmployerProfile';
import JobDetail from './components/JobDetail/JobDetail';

export default function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <PopularJobs />
            <Card />
            <CompanyList />
            <FeaturesSection />
            <Testimonials />
            <JobCTA />
          </>
        } />

        {/* Individual Pages */}
        <Route path="/jobs" element={<PopularJobs />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/skills' element={<SkillCards/>}/>
        <Route path='/employerprofile' element={<EmployerProfile/>}/>
        <Route path='/jobdetail' element={<JobDetail/>}/>


        {/* 404 Page */}
        <Route path="*" element={<h2 className="text-center text-white mt-20">404 - Page Not Found</h2>} />
      </Routes>

      <Footer />
    </Router>
  );
}
