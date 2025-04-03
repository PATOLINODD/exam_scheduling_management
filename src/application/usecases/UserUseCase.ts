import { Email, User, UserModel, type UserRepository } from "@/domain";
import { UserDto } from "../dtos/userDto";

export class UserUseCase {
  constructor(private userRepo: UserRepository) {}
  async create(user: UserDto): Promise<UserModel | null> {
    try {
        const email = new Email(user.email);
        const userEnt = new User('""-""-""-""-""', email, user.sctpsd);
        return await this.userRepo.create(userEnt);
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong!");
    }
  }

  async get(id: string): Promise<UserModel | null> {
    try {
      return await this.userRepo.get(id);
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong!");
    }
  }
}
