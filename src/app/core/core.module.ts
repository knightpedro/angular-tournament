import { NgModule } from '@angular/core';
import { AuthGuard, AuthService } from './services';

@NgModule({
  providers: [AuthService, AuthGuard],
})
export class CoreModule {}
