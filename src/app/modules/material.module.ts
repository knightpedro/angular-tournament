import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  exports: [BrowserAnimationsModule, MatButtonModule, MatSliderModule],
})
export class MaterialModule {}
