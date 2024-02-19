import "leaflet/dist/leaflet.css";
import dynamic from 'next/dynamic';

const MapComponentWithNoSSR = dynamic(() => import('./components/mapcomponent'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-[300px]">
      <MapComponentWithNoSSR />
    </main>
  );
}
