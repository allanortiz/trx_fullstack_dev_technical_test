export type Vehicle = {
  id?: string;
  license_plate: string;
  economic_number: string;
  vim: string;
  seats: number;
  insurance: string;
  insurance_number: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  route_start_lat?: string;
  route_start_lng?: string;
  route_end_lat?: string;
  route_end_lng?: string;
};
