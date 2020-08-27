import { Competitor } from './competitor.model';
import { Leg } from './leg.model';

export interface Fixture {
  id: string;
  competitors: Competitor[];
  legs: Leg[];
}
