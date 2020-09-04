import { Stage } from './stage.model';

export enum ScoringMethod {
  HighestWins = 'highest',
  LowestWins = 'lowest',
}

export interface Tournament {
  id: string;
  name: string;
  stages: Stage[];
}
