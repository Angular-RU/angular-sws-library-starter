import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwsLoadingComponent} from './sws-loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SwsLoadingComponent],
  exports: [SwsLoadingComponent]
})
export class SwsLoadingModule {
}
