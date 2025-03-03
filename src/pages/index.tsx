import Head from 'next/head';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Showcase } from '../components/sections/Showcase';
import { Process } from '../components/sections/Process';
import { Counter } from '../components/sections/Counter';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>TapEats | Fuel Your Flavor Adventure</title>
        <meta name="description" content="Streamlined restaurant management and delightful dining experiences at your fingertips." />
      </Head>
      
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Process />
        <Counter />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}