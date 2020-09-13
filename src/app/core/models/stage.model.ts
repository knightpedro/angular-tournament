import { Competitor } from './competitor.model';
import { Fixture } from './fixture.model';

export enum StageFormat {
  RoundRobin = 'Round robin',
  SingleElimination = 'Single elimination',
  DoubleElimination = 'Double elimination',
}

export interface Stage {
  id: string;
  format: StageFormat;
  competitors: Competitor[];
  fixtures: Fixture[];
}
