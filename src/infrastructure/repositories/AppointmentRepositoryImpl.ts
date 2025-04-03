import { Appointment, AppointmentRepository } from "@/domain";

export default class AppointmentRepositoryImpl implements AppointmentRepository {
    add(): Promise<Appointment | null> {
        throw new Error();
    }
    view(): Promise<Appointment | null> {
        throw new Error();
    }
    remove(): Promise<boolean> {
        throw new Error();
    }

}