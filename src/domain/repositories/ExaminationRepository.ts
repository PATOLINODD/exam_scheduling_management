import { Examination } from "@/domain";

export default interface ExaminationRepository {
  list(): Promise<Examination[] | null>;
}
