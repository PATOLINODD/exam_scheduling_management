export class UserDto {
  id: string;
  email: string;
  sctpsd: string;

  constructor(id: string, email: string, sctpsd: string) {
    this.id = id;
    this.email = email;
    this.sctpsd = sctpsd;
  }
}
