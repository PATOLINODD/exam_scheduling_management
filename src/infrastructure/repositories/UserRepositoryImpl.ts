import { User, UserModel, UserRepository } from "@/domain";
import { users } from "../drizzleDB";
import { NodePgClient, NodePgDatabase } from "drizzle-orm/node-postgres";
import { UUID } from "crypto";
import { UserAttrs } from "@/domain/types/userType";

export default class UserRepositoryImpl implements UserRepository {
  constructor(
    private readonly db: NodePgDatabase<Record<string, never>> & {
      $client: NodePgClient;
    }
  ) {}

  async create(user: User): Promise<UserModel | null> {
    try {
      if (!user._email) {
        throw new Error("Check your email.");
      }
      const [columns] = await this.db
        .insert(users)
        .values({ user_email: user._email, user_sctpsd: user._msctpsd })
        .returning();
      return new UserModel(columns.user_id as UUID, columns.user_email);
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong!");
    }
  }

  async get(id: UUID): Promise<UserModel | null> {
    try {
      const userModel: UserModel[] = await this.db
        .select({ id: users.user_id, email: users.user_email })
            .from(users);
      if (userModel.length === 0 || !userModel[0]) {
        throw new Error("Verify the data and try again later.");
      }
      return userModel[0];
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong!");
    }
  }
}
