import {Examination, ExaminationRepository} from '@/domain';

export default class ExaminationRepositoryImpl implements ExaminationRepository {
    list(): Promise<Examination[] | null> {
        throw new Error();
    }

}