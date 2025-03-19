import { Examination } from "../index";

export interface ExaminationRepository {
  list(): Promise<Examination[] | null>;
  add(): Promise<Examination | null>;
  remove(): Promise<boolean | null>;
  view(): Promise<Examination | null>;
}
