import Navbar from '../components/section/navbar';
import Hero from '@/components/section/hero';
import Conference from '@/components/section/conference';
import Committee from '@/components/section/committee';
import SteeringCommittee from '@/components/section/steering_committee';
import Where from '@/components/section/where';
import Footer from '@/components/section/footer';
import Sponsors from '@/components/section/sponsors';
import Register from '@/components/section/register';
import Organizers from '@/components/section/organizers';

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Conference */}
      <Conference id="conference" />
      {/* Where and When*/}
      <Where id="where" />
      {/* Register */}
      {/* <Register id='registration'/> */}
      {/* Steering Committee */}
      <SteeringCommittee />
      {/* Committee */}
      {/* <Committee /> */}
       {/* Local Organizers */}
      <Organizers id="organizers" />
      {/* Main conference */}
      <Sponsors /> 
      {/* Footer */}
      <Footer />
    </main>
  );
}
