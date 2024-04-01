class Vehicle {
  constructor(
    id,
    license_plate,
    economic_number,
    vim,
    seats,
    insurance,
    insurance_number,
    brand,
    model,
    year,
    color,
    route_start_lat,
    route_end_lng
  ) {
    this.id = id;
    this.license_plate = license_plate;
    this.economic_number = economic_number;
    this.vim = vim;
    this.seats = seats;
    this.insurance = insurance;
    this.insurance_number = insurance_number;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.route_start_lat = route_start_lat;
    this.route_end_lng = route_end_lng;
  }
}

export default Vehicle;
