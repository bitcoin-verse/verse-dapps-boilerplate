import type { AppProps } from 'next/app';
import '../styles/globals.css';
import DrawerWrapper from '@/components/drawer-wrapper';
import DrawerContent from '@/components/drawer';
import Header from '@/components/header';
import ProvidersWrapper from '../context/ProvidersWrapper';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-background antialiased text-white">
      <ProvidersWrapper>
        <DrawerWrapper>
          <Header />
          <DrawerContent>
            <Component {...pageProps} />
          </DrawerContent>
        </DrawerWrapper>
      </ProvidersWrapper>
    </div>
  );
}