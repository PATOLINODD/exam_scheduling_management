import { UUID } from "crypto";
import { Email, Msctpsd } from "@/domain";

export default class User {
  private id: UUID;
  private email: Email;
  private msctpsd: Msctpsd;
  constructor(id: UUID, email: Email, msctpsd: Msctpsd) {
    this.id = id;
    this.email = email;
    this.msctpsd = msctpsd;
  }
}
