import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout/Layout';
import { useEffect } from 'react';
import { initEmailJS } from '../utils/emailjs';

function MyApp({ Component, pageProps }: AppProps) {
  // Initialize EmailJS when the app first loads
  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;