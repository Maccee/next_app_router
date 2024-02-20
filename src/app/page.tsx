"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Topbar from './components/Topbar';
import SearchInput from './components/SearchInput';
const MapComponentWithNoSSR = dynamic(() => import('./components/Mapcomponent'), {
  ssr: false,
});



export default function Home() {
  const [mapHeight, setMapHeight] = useState(300); // Map height

  // Toggle map height
  const toggleMapHeight = () => {
    setMapHeight(mapHeight === 300 ? 0 : 300);
  };



  return (
    <>
      <div className='sticky top-0 bg-white'>

        <div className='shadow-lg'>
          <Topbar />
        </div>

        <div className="max-w-6xl mx-auto" style={{ height: `${mapHeight}px`, transition: 'height 0.5s ease' }}>
          <MapComponentWithNoSSR />
        </div>

        <div className='max-w-xl mx-auto flex justify-center flex-col'>
          <button onClick={toggleMapHeight} className="mt-2">
            {mapHeight === 350 ? 'Minimize Map' : 'Expand Map'}
          </button>
          <div className='w-100 flex justify-center'>
            <SearchInput />
          </div>
        </div>

      </div>

      <main className="max-w-6xl mx-auto" >

        <div>
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
          Cards<br />
        </div>

      </main>
    </>
  );
}
