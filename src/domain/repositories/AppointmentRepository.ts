import { Appointment } from '@/domain';

export default interface AppointmentRepository {
    add(): Promise<Appointment | null>;
    view(): Promise<Appointment | null>;
    remove(): Promise<boolean>;
}