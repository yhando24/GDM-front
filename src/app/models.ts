export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
  role?: Role;
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER'
}

export function getEnum() {
  return [Role.MANAGER, Role.USER, Role.ADMIN];
}

export interface Mission {

  startDate?: Date;
  endDate?: Date;
  departureCity?: string;
  arrivalCity?: string;
  prime?: number;
  missionStatus?: MissionStatusEnum;
  transportEnum?: TransportEnum;

}


export interface token {

id_token : string
}

export enum MissionStatusEnum {
 EN_ATTENTE, VALIDE, REJETE, INITIAL, ANNULE
}

export enum TransportEnum {
  TRAIN, AVION, TAXI, BUS, BATEAU, NAVETTE_SPATIALE, VOITURE, VELO, HELICOPTERE
}

export interface Kind {

  name?: string;
  adr?: number;
  bonusPercentage?: number;
  updatedAt?: Date;
  invoiced?: boolean;
  bonus?: boolean;
  dailyCharges?: number;
  authorizationToExceed?: boolean;
}
