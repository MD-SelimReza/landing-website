import React from 'react';
import ProfileCard from './components/ProfileCard';
import ServiceCard from './components/ServicesCard';
import ReviewsSection from './components/RiviewSection';

function App() {
  return (
    <div className="container max-w-7xl mx-auto p-6 bg-white">
      <ProfileCard />
      <ServiceCard />
      <ReviewsSection />
    </div>
  );
}

export default App;