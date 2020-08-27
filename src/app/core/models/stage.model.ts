import { Competitor } from './competitor.model';
import { Fixture } from './fixture.model';

export enum StageFormat {
  RoundRobin = 'Round Robin',
  SingleElimination = 'Single Elimination',
  DoubleElimination = 'Double Elimination',
}

export interface Stage {
  id: string;
  format: StageFormat;
  competitors: Competitor[];
  fixtures: Fixture[];
}
