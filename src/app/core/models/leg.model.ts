import { CompetitorScore } from './competitor-score.model';

export interface Leg {
  id: string;
  scores: CompetitorScore[];
}
