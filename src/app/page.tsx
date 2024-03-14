import Navbar from '../components/section/navbar';
import Hero from '@/components/section/hero';
import Conference from '@/components/section/conference';
import Committee from '@/components/section/committee';
import SteeringCommittee from '@/components/section/steering_committee';

export default function Home() {
  return (
    <main>
        {/* Header */}
        <Navbar />
        {/* Hero */}
        <Hero />
      {/* Conference */}
      <Conference />
      {/* SteeringCommittee */}
      <SteeringCommittee />
      {/* Committee */}
      <Committee />
      {/* Main conference */}
      {/* Footer */}
    </main>
  );
}
