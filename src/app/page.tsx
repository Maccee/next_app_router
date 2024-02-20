"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Topbar from './components/Topbar';
import SearchInput from './components/SearchInput';
const MapComponentWithNoSSR = dynamic(() => import('./components/Mapcomponent'), {
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
      <div className='sticky top-0 bg-white'>

        <div className='shadow-lg'>
          <Topbar />
        </div>

        <div className="max-w-6xl mx-auto" style={{ height: `${mapHeight}px`, transition: 'height 0.5s ease' }}>
          <MapComponentWithNoSSR />
        </div>

        <div className='max-w-6xl mx-auto flex justify-center flex-column'>
          <button onClick={toggleMapHeight} className="">
            {mapHeight === 350 ? 'Minimize Map' : 'Expand Map'}
          </button>
          <SearchInput />
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
