import AppointmentRepositoryImpl from "./repositories/AppointmentRepositoryImpl";
import ExaminationRepositoryImpl from "./repositories/ExaminationRepositoryImpl";
import UserRepositoryImpl from "./repositories/UserRepositoryImpl";
import databaseInstance from './drizzleDB/config/connectToDatabase';
import type { UserAttrs } from "@/domain/types/userType";


export {
    UserRepositoryImpl,
    AppointmentRepositoryImpl,
    ExaminationRepositoryImpl,
    databaseInstance
}

export type {
    UserAttrs
}