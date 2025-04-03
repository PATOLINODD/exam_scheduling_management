import { User, UserModel } from "@/domain";

export default interface UserRepository {
  create(user: User): Promise<UserModel | null>;
  get(id: string): Promise<UserModel | null>;
}
