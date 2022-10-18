import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';


const designModuleList: any = [
  ButtonModule, InputTextModule, TableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...designModuleList
  ],
  exports: [...designModuleList]
})
export class DesignModule { }
