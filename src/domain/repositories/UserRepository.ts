import {User} from '..';

export default interface UserRepository {
    create(): Promise<User | null>;
}