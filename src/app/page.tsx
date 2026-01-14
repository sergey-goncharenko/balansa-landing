import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GuardianMode from '@/components/GuardianMode';
import CoachMode from '@/components/CoachMode';
import AdvisorMode from '@/components/AdvisorMode';
import BuilderMode from '@/components/BuilderMode';
import HowItWorks from '@/components/HowItWorks';
import Vision from '@/components/Vision';
import TrustSection from '@/components/TrustSection';
import SignupForm from '@/components/SignupForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <Header />
      <Hero />
      <GuardianMode />
      <CoachMode />
      <AdvisorMode />
      <BuilderMode />
      <HowItWorks />
      <Vision />
      <TrustSection />
      <SignupForm />
      <Footer />
    </main>
  );
}
