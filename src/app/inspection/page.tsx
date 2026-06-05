import Hero from '@/components/home/Hero';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import WhatWeInspect from '@/components/home/WhatWeInspect';
import CommonIssues from '@/components/home/CommonIssues';
import InspectionProcess from '@/components/home/InspectionProcess';
import IncludedInReport from '@/components/home/IncludedInReport';
import SampleReport from '@/components/home/SampleReport';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import ContactCTA from '@/components/home/ContactCTA';

// Home page at /inspection route — sections in the exact PRD order.
export default function InspectionPage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <WhatWeInspect />
      <CommonIssues />
      <InspectionProcess />
      <IncludedInReport />
      <SampleReport />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
