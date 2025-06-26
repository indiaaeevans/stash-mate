import { Component, inject } from '@angular/core';
import { PatternsService } from '../services/patterns-service';
import { MatCardModule } from '@angular/material/card';
import { PatternRecord } from '../../models/pattern';
import { MatButtonModule } from '@angular/material/button';
import { Pattern } from '../pattern/pattern';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { map } from 'rxjs';
@Component({
  selector: 'app-patterns',
  imports: [MatCardModule, MatButtonModule, Pattern, MatChipsModule],
  templateUrl: './patterns.html',
  styleUrl: './patterns.scss'
})
export class Patterns {
  patternsService = inject(PatternsService);
  patterns: PatternRecord[] = [];
  // TODO get types from airtable
  types: string[] = ['Dress', 'Top', 'Pants', 'Shorts', 'Skirt', 'Mens', 'Jumpsuit'];
  ngOnInit() {
    this.patternsService.getPatterns().subscribe((patterns) => {
      this.patterns = patterns;
    });
  }
  onFilterChange(event: MatChipListboxChange) {
    this.patternsService.getPatterns().pipe(map((patterns: PatternRecord[]) => {
      // if all filters are removed, show all patterns
      if (event.value.length === 0) {
        return patterns;
      }
      return patterns.filter((pattern) => {
        return event.value.includes(pattern.fields.Type)
      })
    })).subscribe((patterns) => {
      this.patterns = patterns;
    });
  }

}
