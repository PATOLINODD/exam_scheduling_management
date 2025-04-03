import User from './entities/User';
import Examination from './entities/Examination';
import Appointment  from './entities/Appointment';
import UserRepository from './repositories/UserRepository';
import ExaminationRepository from './repositories/ExaminationRepository';
import AppointmentRepository from './repositories/AppointmentRepository';
import Email from './valueObjects/Email';
import { UserModel } from './models/userModel';


export {
    User, Examination, Appointment,
    Email, UserModel
}

export type {
    UserRepository, ExaminationRepository, AppointmentRepository
}