import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
})
export class MaterialModule {}
