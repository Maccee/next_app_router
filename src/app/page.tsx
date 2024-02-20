"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Topbar from './components/Topbar';
import SearchInput from './components/SearchInput';




const MapComponentWithNoSSR = dynamic(() => import('./components/mapcomponent'), {
  ssr: false,
});

export default function Home() {
  const [mapHeight, setMapHeight] = useState(350); // Map height

  // Toggle map height
  const toggleMapHeight = () => {
    setMapHeight(mapHeight === 350 ? 0 : 350);
  };



  return (
    <>
      <div className='shadow-lg'>
        <Topbar />
      </div>

      <main className="max-w-6xl mx-auto" style={{ height: `${mapHeight}px`, transition: 'height 0.5s ease' }}>

        <button onClick={toggleMapHeight} className="mt-4">
          {mapHeight === 350 ? 'Minimize Map' : 'Expand Map'}
        </button>

        <MapComponentWithNoSSR />
        <SearchInput />

        <div>
          Cards
        </div>

      </main>
    </>
  );
}
