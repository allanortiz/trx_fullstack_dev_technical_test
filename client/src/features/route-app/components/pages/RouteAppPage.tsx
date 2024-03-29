import { Map, Vehicles } from "../..";

export const RoutesAppPage = () => {
  const vehicles = [
    {
      id: "1",
      licence_plate: "ABC-123",
      economic_number: "123",
      vim: "123456",
      brand: "Toyota",
      model: "Corolla",
      year: 2021,
      insurance: "Seguro de daños",
      insurance_number: "123456",
      seats: 5,
      color: "Rojo",
    },
    {
      id: "2",
      licence_plate: "DEF-456",
      economic_number: "456",
      vim: "456789",
      brand: "Honda",
      model: "Civic",
      year: 2020,
      insurance: "Seguro de daños",
      insurance_number: "123456",
      seats: 5,
      color: "Azul",
    },
    {
      id: "3",
      licence_plate: "DEF-456",
      economic_number: "456",
      vim: "456789",
      brand: "Honda",
      model: "Civic",
      year: 2020,
      insurance: "Seguro de daños",
      insurance_number: "123456",
      seats: 5,
      color: "Azul",
    },
    {
      id: "1",
      licence_plate: "ABC-123",
      economic_number: "123",
      vim: "123456",
      brand: "Toyota",
      model: "Corolla",
      year: 2021,
      insurance: "Seguro de daños",
      insurance_number: "123456",
      seats: 5,
      color: "Rojo",
    },
    {
      id: "2",
      licence_plate: "DEF-456",
      economic_number: "456",
      vim: "456789",
      brand: "Honda",
      model: "Civic",
      year: 2020,
      insurance: "Seguro de daños",
      insurance_number: "123456",
      seats: 5,
      color: "Azul",
    },
    {
      id: "3",
      licence_plate: "DEF-456",
      economic_number: "456",
      vim: "456789",
      brand: "Honda",
      model: "Civic",
      year: 2020,
      insurance: "Seguro de daños",
      insurance_number: "123456",
      seats: 5,
      color: "Azul",
    },
  ];

  return (
    <div className="flex flex-col flex-grow w-full 100vh md:flex-row bg-primary">
      <div className="flex-grow">
        <Map />
      </div>

      <div className="max-md:h-128 md:w-128">
        <Vehicles vehicles={vehicles} />
      </div>
    </div>
  );
};
