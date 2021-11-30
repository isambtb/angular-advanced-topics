import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeTimePipe } from './relativeTime/relative-time.pipe';
import { PluralizePipe } from './pluralize/pluralize.pipe';
import { CapitalizePipe } from './capitalize/capitalize.pipe';



@NgModule({
  declarations: [
    RelativeTimePipe,
    PluralizePipe,
    CapitalizePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RelativeTimePipe,
    CapitalizePipe,
    PluralizePipe
  ]
})
export class SharedModule { }
