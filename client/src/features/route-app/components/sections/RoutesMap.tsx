'use client';

import Typography from '@/components/basic/Typography';
import { Vehicle } from '@/types/Vehicle';
import { GoogleMap, useLoadScript, Marker, InfoWindow, DirectionsRenderer } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { FaCircle } from 'react-icons/fa';

type RoutesMapProps = {
  selectedVehicle: Vehicle;
};

const DEFAULT_CENTER_POSITION = {
  lat: 21.022022,
  lng: -89.565442,
};

export const RoutesMap = ({ selectedVehicle }: RoutesMapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
  });

  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [centerPosition, setCenterPosition] = useState<{ lat: number; lng: number }>();

  useEffect(() => {
    if (!selectedVehicle) return;

    setCenterPosition({ lat: Number(selectedVehicle.route_start_lat), lng: Number(selectedVehicle.route_start_lng) });
  }, [selectedVehicle]);

  useEffect(() => {
    if (!isMapReady || !selectedVehicle) return;

    const directionsService = new window.google.maps.DirectionsService();

    const origin = { lat: Number(selectedVehicle.route_start_lat), lng: Number(selectedVehicle.route_start_lng) };
    const destination = { lat: Number(selectedVehicle.route_end_lat), lng: Number(selectedVehicle.route_end_lng) };
    // const waypt = [
    //   {
    //     location: { lat: 40.278022, lng: -76.899615 },
    //     stopover: true,
    //   },
    //   {
    //     location: { lat: 40.750216, lng: -78.922049 },
    //     stopover: true,
    //   },
    // ];

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        // waypoints: waypt,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Error fetching directions ${result}`);
        }
      }
    );
  }, [isMapReady, selectedVehicle]);

  const openInfoWindow = () => {
    setIsInfoWindowOpen(true);
  };

  const closeInfoWindow = () => {
    setIsInfoWindowOpen(false);
  };

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
    <section className="w-full flex-grow h-full">
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100%',
        }}
        zoom={11}
        center={(centerPosition as any) || DEFAULT_CENTER_POSITION}
        onLoad={() => {
          setIsMapReady(true);
        }}
      >
        {!!selectedVehicle && !!directions && <DirectionsRenderer directions={directions} />}

        {!!selectedVehicle && (
          <Marker
            position={(centerPosition as any) || DEFAULT_CENTER_POSITION}
            icon={{
              url: '/images/marker.png',
              fillColor: '#EB00FF',
              scale: 2,
            }}
            onClick={openInfoWindow}
          >
            {isInfoWindowOpen && (
              <InfoWindow onCloseClick={closeInfoWindow}>
                <div className="bg-white p-2">
                  <Typography color="gray-800" as="div" className="flex flex-row items-center gap-3">
                    <span className="flex flex-row items-center">Estatus:</span>

                    <Typography fontWeight="bold" className="flex flex-row items-center">
                      <FaCircle className="w-2 h-2 text-green-500 mr-1" /> Activo
                    </Typography>
                  </Typography>

                  <Typography color="gray-800" as="div" className="flex flex-row items-center gap-3">
                    <span className="flex flex-row items-center">Servicio:</span>

                    <Typography fontWeight="bold" className="flex flex-row items-center">
                      Entrega de producto
                    </Typography>
                  </Typography>
                </div>
              </InfoWindow>
            )}
          </Marker>
        )}
      </GoogleMap>
    </section>
  );
};
