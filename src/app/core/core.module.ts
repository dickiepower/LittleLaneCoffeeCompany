import { NgModule } from '@angular/core';

import { MatGridListModule, MatTabsModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule
  ]
})
export class CoreModule {
}
