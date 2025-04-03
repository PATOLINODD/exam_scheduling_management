import { randomUUID, UUID } from "crypto";
import { Email } from "@/domain";

export default class User {
  private id: UUID;
  private email: Email;
  private msctpsd: string;
  constructor(id: UUID = randomUUID(), email: Email, msctpsd: string) {
    this.id = id;
    this.email = email;
    this.msctpsd = msctpsd;
  }

  get _id() {
    return this.id;
  }

  set _id(id: UUID) {
    this.id = id;
  }
  get _email(): string | null {
    return this.email._value;
  }

  set _email(email: Email) {
    this.email = email;
  }
  get _msctpsd() {
    return this.msctpsd;
  }

  set _msctpsd(msctpsd: string) {
    this.msctpsd = msctpsd;
  }
}
