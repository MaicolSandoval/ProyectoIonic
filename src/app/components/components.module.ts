import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [
    
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuComponent
  ]
})
export class ComponentsModule { }