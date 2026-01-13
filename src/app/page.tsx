import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GuardianMode from '@/components/GuardianMode';
import CoachMode from '@/components/CoachMode';
import AdvisorMode from '@/components/AdvisorMode';
import BuilderMode from '@/components/BuilderMode';
import Vision from '@/components/Vision';
import SignupForm from '@/components/SignupForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <GuardianMode />
      <CoachMode />
      <AdvisorMode />
      <BuilderMode />
      <Vision />
      <SignupForm />
      <Footer />
    </main>
  );
}
