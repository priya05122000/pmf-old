'use client';
import React from 'react'
import  Hero  from './components/Hero'
import Choose from './components/Choose';
import About from './components/About';
import Industries from './components/Industries';
import Services from './components/Services';
import Brief from './components/Brief';
import Work from './components/Work';
import TrustedSection from './components/TrustedSection';
import Review from './components/Review';
import PinnedSection from './components/PinnedSection';

 const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Choose/>
        <About/>
        <Industries/>
        <Services/>
        <PinnedSection />
        <Brief/>
        <Work/>
        <TrustedSection/>
        <Review/>
    </div>
  )
}
export default HomePage;