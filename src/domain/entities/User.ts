import { UUID } from "crypto";
import Email from "../valueObjects/Email";
import Msctpsd from "../valueObjects/Msctpsd";

export default class User {
    private id: UUID;
    private email: Email;
    private msctpsd: Msctpsd;
    constructor(id: UUID, email: Email, msctpsd: Msctpsd){
        this.id = id;
        this.email = email;
        this.msctpsd = msctpsd;
    }
}