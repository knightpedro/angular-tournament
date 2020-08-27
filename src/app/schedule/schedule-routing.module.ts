import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateScheduleComponent } from './create-schedule.component';
import { AuthGuard } from '../core';

const routes: Routes = [
  {
    path: 'create',
    component: CreateScheduleComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
