import { NullTemplateVisitor } from '@angular/compiler';

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

export interface IMission {
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



export class Mission implements IMission {
  public constructor(public id?: number, public kind?: Kind, public startDate?: Date, public departureCity?: string, public endDate?: Date, public arrivalCity?: string, public prime?: number, public missionStatus?: MissionStatusEnum, public transportEnum?: TransportEnum, public user?: User) {
    this.id = id ? id : null;
    this.kind = kind ? kind : null;
    this.startDate = startDate ? startDate : null;
    this.endDate = endDate ? endDate : null;
    this.departureCity = departureCity ? departureCity : null;
    this.arrivalCity = arrivalCity ? arrivalCity : null;
    this.prime = prime ? prime : null;
    this.missionStatus = missionStatus ? missionStatus : null;
    this.transportEnum = transportEnum ? transportEnum : null;
    this.user = user ? user : null;
  }
}

export interface IModelMissionCalendar {
  id: number;
  start: Date;
  end: Date;
  title: string;
}

export class ModelMissionCalendar implements IModelMissionCalendar {
  public constructor(public id: number, public start: Date, public end: Date, public title: string) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.title = title;
  }
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
  ATTENTE, VALIDE, REJETE, INITIAL, ANNULE
}

export function getStatusAccount() {
  return [
    ExpenseAccountStatusEnum.ATTENTE,
    ExpenseAccountStatusEnum.VALIDE,
    ExpenseAccountStatusEnum.ANNULE,
    ExpenseAccountStatusEnum.REJETE,
    ExpenseAccountStatusEnum.INITIAL,

  ]}
export interface ExpenseAccount {
  id?: number;
  date?: Date;
  type?: string;
  amount?: number;
  status?: ExpenseAccountStatusEnum;
  mission?: IMission;
}

