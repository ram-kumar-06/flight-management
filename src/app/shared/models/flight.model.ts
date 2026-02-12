export type FlightStatus =
  | 'Scheduled'
  | 'Boarding'
  | 'Delayed'
  | 'Cancelled'
  | 'Landed';

export interface Flight {
  id: number;
  flightNo: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  gate?: string;
  terminal?: string;
  aircraftType?: string;
  capacity?: number;
  seatsAvailable?: number;
  status: FlightStatus;
  price?: number;
  lastUpdated: string;
  createdAt: string;
  updatedAt: string;
}
