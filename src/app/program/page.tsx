import React from 'react';
import Navbar from '../../components/section/navbar';
import Footer from '../../components/section/footer';
import Schedule from '../../components/section/schedule';

export default function Program() {
  return (
    <main>
      {/* Header */}
      <Navbar />

      {/* Schedule */}
      <Schedule />

      {/* Footer */}
      <Footer />
    </main>
  );
}