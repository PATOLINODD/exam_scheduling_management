import { Examination } from "../index";

export default interface ExaminationRepository {
  list(): Promise<Examination[] | null>;
}
