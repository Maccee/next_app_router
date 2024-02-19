"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Topbar from './components/topbar';


const MapComponentWithNoSSR = dynamic(() => import('./components/mapcomponent'), {
  ssr: false,
});

export default function Home() {
  const [mapHeight, setMapHeight] = useState(350); // Initial map height

  // Function to toggle map height
  const toggleMapHeight = () => {
    setMapHeight(mapHeight === 350 ? 0 : 350);
  };

  return (
    <>
      <Topbar />
      <main className="max-w-6xl mx-auto" style={{ height: `${mapHeight}px`, transition: 'height 0.5s ease' }}>
        
          <MapComponentWithNoSSR />
        
        <button onClick={toggleMapHeight} className="mt-4">
          {mapHeight === 350 ? 'Minimize Map' : 'Expand Map'}
        </button>
      </main>
    </>
  );
}
