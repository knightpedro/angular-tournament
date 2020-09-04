import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { NoAuthGuard } from './no-auth.guard';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [AuthRoutingModule.Components],
  providers: [NoAuthGuard],
})
export class AuthModule {}
