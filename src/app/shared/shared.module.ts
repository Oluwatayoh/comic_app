import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  CapitalizePipe,
  ElipsesPipe,
  SearchPipe,
  SentenceCase,
} from '../services/custom.pipes';

@NgModule({
  declarations: [SearchPipe, CapitalizePipe, ElipsesPipe, SentenceCase],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    // CustomDropdownComponent,
    // DatatableComponent,
  ],
  exports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SearchPipe,
    CapitalizePipe,
    ElipsesPipe,
    SentenceCase,
  ],
})
export class SharedModule {}
