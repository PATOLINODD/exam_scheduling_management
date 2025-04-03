import connectDatabase from './config/connectToDatabase';
import { appointments } from './models/Appointments';
import { examinations } from './models/Examinations';
import { users } from './models/Users';

export {
    connectDatabase,
    users,
    examinations,
    appointments
}