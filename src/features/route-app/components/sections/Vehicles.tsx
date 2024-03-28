"use client";

import { Vehicle } from "@/types/Vehicle";
import { VehiclesSkeleton } from "../basic/skeletons/VehiclesSkeleton";
import { VehicleItem } from "../composite/VehicleItem";
import { useState } from "react";
import clsx from "clsx";
import { VehicleDetail } from "../composite/VehicleDetail";
import { ResizeElement } from "../basic/ResizeElement";
import Typography from "@/components/basic/Typography";
import { InputSearch } from "@/components/composite/InputSearch";

type VehicleItemProps = {
  vehicles: Vehicle[];
  isLoading?: boolean;
};

export const Vehicles = ({
  vehicles,
  isLoading,
}: VehicleItemProps): JSX.Element => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(null as any);

  return (
    <section className="flex flex-col w-full h-full bg-white max-md:rounded-t-2xl md:flex-row md:rounded-l-2xl">
      {isLoading && <VehiclesSkeleton />}

      <ResizeElement />

      <div
        className={clsx("flex flex-col flex-grow", selectedVehicle && "hidden")}
      >
        <Typography
          as="h2"
          fontWeight="bold"
          fontSize="2xl"
          className="block w-full my-8 text-center"
        >
          Lista de vehículos
        </Typography>

        <div className="mb-8 grid place-items-center">
          <InputSearch
            placeholder="¿Qué vehículo buscas?"
            onFilterClick={() => {}}
          />
        </div>

        <div className="flex flex-col flex-grow gap-4 overflow-y-auto transition duration-200 ease-out md:pr-8 md:pl-2 max-md:px-8 md:pb-8">
          {vehicles.map((vehicle, index) => (
            <VehicleItem
              key={index}
              vehicle={vehicle}
              onSelect={() => setSelectedVehicle(vehicle)}
            />
          ))}
        </div>
      </div>

      <div
        className={clsx(
          "duration-200 ease-out transition flex flex-col flex-grow py-8 pr-8",
          !selectedVehicle && "hidden"
        )}
      >
        <VehicleDetail
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null as any)}
          hasPadding={false}
        />
      </div>
    </section>
  );
};
