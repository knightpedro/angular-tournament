import { Stage } from './stage.model';

export interface Tournament {
  id: string;
  name: string;
  stages: Stage[];
}
