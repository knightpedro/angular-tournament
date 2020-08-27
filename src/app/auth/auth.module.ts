import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [AuthRoutingModule.Components],
})
export class AuthModule {}
