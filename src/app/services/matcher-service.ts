import { inject, Injectable } from '@angular/core';
import { PatternRecord } from '../../models/pattern';
import { FabricRecord } from '../../models/fabric';
import { map, Observable, of, switchMap, tap, catchError } from 'rxjs';
import { FabricsService } from './fabrics-service';
import { PatternsService } from './patterns-service';

@Injectable({
  providedIn: 'root'
})
export class MatcherService {
  fabricsService = inject(FabricsService);
  patternsService = inject(PatternsService);
  constructor() { }

  matchFabricToPatterns(fabricId: string): Observable<PatternRecord[]> {
    return this.fabricsService.getFabric(fabricId).pipe(
      switchMap((fabric: FabricRecord | undefined) => {
        if (!fabric) {
          throw new Error('Fabric not found');
        }
        return this.patternsService.getPatterns().pipe(
          map((patterns) => patterns.filter((pattern) => {
            return pattern.fields.Fabric_type === fabric.fields.Type
          }).filter((pattern) => {
            if (fabric.fields['Width (in)'] < 50 && pattern.fields.Yardage_narrow) {
              return fabric.fields.Yards >= pattern.fields.Yardage_narrow
            } else if (pattern.fields.Yardage_wide) {
              return fabric.fields.Yards >= pattern.fields.Yardage_wide
            }
            return false;
          })
          )
        )
      })
    )
  }

  matchPatternToFabrics(patternId: string): Observable<FabricRecord[]> {
    return this.patternsService.getPattern(patternId).pipe(
      switchMap((pattern: PatternRecord | undefined) => {
        if (!pattern) {
          throw new Error('Pattern not found');
        }
        return this.fabricsService.getFabrics().pipe(
          map((fabrics) => fabrics.filter((fabric) => {
            return fabric.fields.Type === pattern.fields.Fabric_type
          })
            .filter((fabric) => {
              if (fabric.fields['Width (in)'] < 50 && pattern.fields.Yardage_narrow) {
                return fabric.fields.Yards >= pattern.fields.Yardage_narrow
              } else if (pattern.fields.Yardage_wide) {
                return fabric.fields.Yards >= pattern.fields.Yardage_wide
              }
              return false;
            }))
        )
      }),
      catchError((error) => {
        console.error('Error matching pattern to fabrics:', error);
        return of([]);
      })
    )
  }
}
