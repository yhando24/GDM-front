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

export function getEnum() {
  return [Role.USER, Role.ADMIN, Role.MANAGER];
}
export function getRolesEnum() {
  return [Role.MANAGER, Role.USER, Role.ADMIN];
}

export interface Mission {
    id?: number;
    kind?: Kind;
    startDate?: Date;
    endDate?: Date;
    departureCity?: string;
    arrivalCity?: string;
    prime?: number;
    missionStatus?: MissionStatusEnum;
    transportEnum?: TransportEnum;
    user?: User;
}

export interface token {
  id_token: string;
}

export enum MissionStatusEnum {
  EN_ATTENTE, VALIDE, REJETE, INITIAL, ANNULE
}

export enum TransportEnum {
  TRAIN = 'TRAIN',
  AVION = 'AVION',
  TAXI = 'TAXI',
  BUS = 'BUS',
  BATEAU = 'BATEAU',
  NAVETTE_SPATIALE = 'NAVETTE_SPATIALE',
  VOITURE = 'VOITURE',
  VELO = 'VELO',
  HELICOPTERE = 'HELICOPTERE'
}
export function getTransportEnum() {
  return [
    TransportEnum.AVION,
    TransportEnum.BATEAU,
    TransportEnum.BUS,
    TransportEnum.HELICOPTERE,
    TransportEnum.NAVETTE_SPATIALE,
    TransportEnum.TAXI,
    TransportEnum.TRAIN,
    TransportEnum.VELO,
    TransportEnum.VOITURE
  ];
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
  active?: boolean;
}

export interface Historic {
  timestamp?: Date;
  kind?: Kind;
}

export enum ExpenseAccountStatusEnum {
  EN_ATTENTE, VALIDE, REJETE, INITIAL, ANNULE
}

export interface ExpenseAccount {
  id?: number;
  date?: Date;
  type?: string;
  amount?: number;
  status?: ExpenseAccountStatusEnum;
}

