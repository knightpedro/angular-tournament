import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthGuard, AuthService } from './services';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

@NgModule({
  providers: [AuthService, AuthGuard],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
