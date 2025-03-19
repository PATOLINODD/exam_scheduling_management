import User from './entities/User';
import Examination from './entities/Examination';
import Appointment  from './entities/Appointment';
import UserRepository from './repositories/UserRepository';
import ExaminationRepository from './repositories/ExaminationRepository';
import AppointmentRepository from './repositories/AppointmentRepository';


export {
    User, Examination, Appointment
}

export type {
    UserRepository, ExaminationRepository, AppointmentRepository
}