import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    NavigationBarComponent,
    NavComponent],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NavigationBarComponent,
    NavComponent
  ]
})

export class SharedModule {
}
