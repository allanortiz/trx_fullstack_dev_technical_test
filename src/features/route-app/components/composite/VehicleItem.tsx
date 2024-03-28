"use client";

import Typography from "@/components/basic/Typography";
import { Vehicle } from "@/types/Vehicle";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

type VehicleItemProps = {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
};

export const VehicleItem = ({
  vehicle,
  onSelect,
}: VehicleItemProps): JSX.Element => {
  const { licence_plate, economic_number, brand, model } =
    vehicle || ({} as any);

  return (
    <div
      className="flex flex-row items-center w-full gap-4 p-4 transition-all duration-200 ease-in-out bg-gray-200 cursor-pointer rounded-2xl hover:bg-gray-300"
      onClick={() => onSelect(vehicle)}
    >
      {/* <div
        className="w-16 h-16 rounded-lg"
        style={{
          backgroundImage: `url(${vehicle.image_url || "/images/car.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      /> */}
      <div className="w-16 h-16 rounded-lg">
        <Image
          src={vehicle.image_url || "/images/car.svg"}
          alt="Vehicle image"
          width={64}
          height={64}
        />
      </div>
      {/* <div className="grid w-16 h-16 rounded-full bg-primary place-items-center">
        <FaCarSide className="w-8 h-8 text-white" />
      </div> */}

      <Typography
        as="div"
        className="flex flex-row justify-between flex-grow"
        fontSize="xl"
        color="gray-600"
      >
        <div className="flex flex-col flex-grow">
          <Typography fontWeight="bold">{licence_plate}</Typography>
          <Typography>{economic_number}</Typography>
          <Typography>
            {brand} {model}
          </Typography>
        </div>

        <div className="grid w-6 place-items-center">
          <FaAngleRight className="w-6 h-6 text-primary" />
        </div>
      </Typography>
    </div>
  );
};
