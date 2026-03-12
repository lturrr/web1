'use client'


import { Hero } from '../widgets/Hero';
import { Services } from '../widgets/Services';
import { SocialProof } from '../widgets/SocialProof';
import { Pain } from '../widgets/Pain';

interface HomePageProps {
  onContactClick: () => void;
}

export default function HomePage({ onContactClick }: HomePageProps) {
  return (
    <>
      <Hero onContactClick={onContactClick} />
      <Pain onContactClick={onContactClick}/>
      <Services onContactClick={onContactClick} />
      <SocialProof onContactClick={onContactClick} />
    </>
  );
}