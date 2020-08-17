import { NgModule } from '@angular/core';
import { CreateScheduleComponent } from './create-schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule, ScheduleRoutingModule],
  declarations: [CreateScheduleComponent],
})
export class ScheduleModule {}
