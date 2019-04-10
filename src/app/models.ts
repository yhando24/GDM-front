export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
  role?: Role;
}

export enum Role {
  USER = 'User',
  ADMIN = 'Admin',
  MANAGER = 'Manager'
}

export function getRolesEnum() {
  return [Role.MANAGER, Role.USER, Role.ADMIN];
}

export interface Mission {

  kind?: Kind;
  startDate?: Date;
  endDate?: Date;
  departureCity?: string;
  arrivalCity?: string;
  prime?: number;
  missionStatus?: MissionStatusEnum;
  transportEnum?: TransportEnum;

}


export interface token {

  id_token: string;
}

export enum MissionStatusEnum {
  EN_ATTENTE, VALIDE, REJETE, INITIAL, ANNULE
}

export enum TransportEnum {
  TRAIN = 'Train', AVION = 'Avion', TAXI = 'Taxi', BUS = 'Bus', BATEAU = 'Bateau', NAVETTE_SPATIALE = 'Navette_Spatiale', VOITURE = 'Voiture', VELO = 'Velo', HELICOPTERE = 'Helicoptère'
}

export function getTransportEnum() {
  return [TransportEnum.TRAIN, TransportEnum.AVION, TransportEnum.TAXI, TransportEnum.BUS, TransportEnum.BATEAU, TransportEnum.NAVETTE_SPATIALE, TransportEnum.VOITURE, TransportEnum.VELO, TransportEnum.HELICOPTERE
  ]
}

export interface Kind {

  id?: number;
  name?: string;
  adr?: number;
  bonusPercentage?: number;
  updatedAt?: Date;
  invoiced?: boolean;
  bonus?: boolean;
  dailyCharges?: number;
  authorizationToExceed?: boolean;
}

export interface Historic {
  timestamp?: Date;
  kind: Kind;
}

