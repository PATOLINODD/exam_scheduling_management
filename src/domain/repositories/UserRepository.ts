import {User} from '..';

export interface UserRepository {
    create(): Promise<User | null>;
}