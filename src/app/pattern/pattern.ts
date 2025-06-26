import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { PatternRecord } from '../../models/pattern';

@Component({
  selector: 'app-pattern',
  imports: [MatCardModule, RouterLink, MatButtonModule],
  templateUrl: './pattern.html',
  styleUrl: './pattern.scss'
})
export class Pattern {
  pattern = input.required<PatternRecord>();
}
