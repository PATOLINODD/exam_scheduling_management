import { Appointment } from '..';

export interface AppointmentRepository {
    add(): Promise<Appointment | null>;
    view(): Promise<Appointment | null>;
    remove(): Promise<boolean>;
}