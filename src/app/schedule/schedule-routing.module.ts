import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateScheduleComponent } from './create-schedule.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
