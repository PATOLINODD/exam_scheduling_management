import Examination from "./Examination";

export default class Appointment {
    constructor(
        public id: number,
        public examination: Examination,
        public userId: number,
        public dateTime: Date,
        public notes?: string
    ) {}
}