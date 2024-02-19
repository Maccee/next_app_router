import dynamic from 'next/dynamic';
import Topbar from './components/topbar';

const MapComponentWithNoSSR = dynamic(() => import('./components/mapcomponent'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="h-[450px] w-[1440px] mx-auto">
        <MapComponentWithNoSSR />
      </main>
    </>
  );
}
