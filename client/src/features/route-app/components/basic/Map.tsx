'use client';

import Typography from '@/components/basic/Typography';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { CgSpinner } from 'react-icons/cg';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 20.974484,
  lng: -89.621756,
};

export const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
  });

  if (loadError) {
    return (
      <div className="grid place-items-center w-full h-full">
        <Typography color="red-500" fontWeight="bold">
          Error loading maps
        </Typography>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="grid place-items-center w-full h-full">
        <CgSpinner className="w-12 h-12 mr-2 animate-spin text-white" />
      </div>
    );
  }

  return (
    <div className="w-full flex-grow h-full">
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={11} center={center}>
        {/* <Marker position={center} /> */}
      </GoogleMap>
    </div>
  );
};
