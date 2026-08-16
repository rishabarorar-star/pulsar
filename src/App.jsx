import React, { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductOverview from './components/ProductOverview';
import Features from './components/Features';
import Applications from './components/Applications';
import Specifications from './components/Specifications';
import PricingCatalogue from './components/PricingCatalogue';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CatalogueViewerModal from './components/CatalogueViewerModal';

export default function App() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  const handleOpenCatalogue = () => {
    setCatalogueOpen(true);
  };

  const handleRequestInfo = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen theme-root">
      {/* Background Neural / Grid Canvas & Ambient Lighting */}
      <AnimatedBackground />

      {/* Navigation Header */}
      <Navbar onRequestInfo={handleRequestInfo} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenCatalogue={handleOpenCatalogue}
          onRequestInfo={handleRequestInfo}
        />

        <ProductOverview />



        <Features />

        <Applications />

        <Specifications onOpenCatalogue={handleOpenCatalogue} />

        <PricingCatalogue
          onOpenCatalogue={handleOpenCatalogue}
          onRequestInfo={handleRequestInfo}
        />

        <ContactForm />
      </main>

      {/* Footer */}
      <Footer onOpenCatalogue={handleOpenCatalogue} />

      {/* PDF Catalogue Modal Viewer */}
      <CatalogueViewerModal
        isOpen={catalogueOpen}
        onClose={() => setCatalogueOpen(false)}
      />
    </div>
  );
}
