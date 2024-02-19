import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  GeoJSON
} from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import {
  ZoomControl,
  transformGeometryCollections,
  flipCoordinates,
} from "./MapControlUtils";


const Mapa = () => {
  const defaultPosition: [number, number] = [60.1710, 24.9413];
  return (
    <MapContainer center={defaultPosition} zoom={13} scrollWheelZoom={true} zoomControl={false} style={{ height: '100%', width: '100%', zIndex: '0' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://tiles.hel.ninja/styles/hel-osm-bright/{z}/{x}/{y}@2x@fi.png"
      />
      <Marker position={defaultPosition}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ZoomControl/>
    </MapContainer>
  );
}

export default Mapa;
