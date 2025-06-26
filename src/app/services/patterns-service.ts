import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { PatternRecord } from '../../models/pattern';
const PATTERNS_URL = 'https://y2strwfqnj.execute-api.us-east-2.amazonaws.com/tbl8KKdp71mi9ey6L';
export type PatternsResponse = { records: PatternRecord[] };

@Injectable({
  providedIn: 'root'
})
export class PatternsService {

  private http = inject(HttpClient);
  // @ts-ignore
  private patterns$: Observable<PatternRecord[]>;

  getPatterns(): Observable<PatternRecord[]> {
    if (!this.patterns$) {
      this.patterns$ = this.http.get<PatternsResponse>(PATTERNS_URL).pipe(
        map((res) => res.records),
        shareReplay({ bufferSize: 1, refCount: true })
      );
    }
    return this.patterns$;
  };
  getPattern(id: string): Observable<PatternRecord | undefined> {
    return this.getPatterns().pipe(
      map((patterns) => patterns.find((pattern) => pattern.id === id))
    );
  }

}
