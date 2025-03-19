import {User} from '@/domain';

export default interface UserRepository {
    create(): Promise<User | null>;
}