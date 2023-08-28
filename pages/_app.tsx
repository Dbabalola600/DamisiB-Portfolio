import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/DefaultLayout'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import LoadingAnimation from '../components/Loading';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const [loading, setLoading] = useState(false); // Initialize a loading state

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);
    const handleRouteChangeError = () => setLoading(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    // Clean up event listeners
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);
  return (
    <>
    {loading && <LoadingAnimation/>}
      <DefaultLayout>

        <Component {...pageProps} />
      </DefaultLayout>

    </>

  )
}

export default MyApp
