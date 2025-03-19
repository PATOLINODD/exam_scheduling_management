import { Examination } from "../index";

export interface ExaminationRepository {
  list(): Promise<Examination[] | null>;
}
