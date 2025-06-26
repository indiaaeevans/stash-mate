import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { FabricRecord } from '../../models/fabric';
const FABRICS_URL = 'https://y2strwfqnj.execute-api.us-east-2.amazonaws.com/tblRH6TIw2cs8itMa';

export interface FabricsResponse {
  records: FabricRecord[];
}

@Injectable({
  providedIn: 'root'
})
export class FabricsService {

  private http = inject(HttpClient);
  // @ts-ignore
  private fabrics$: Observable<FabricRecord[]>;

  getFabrics(): Observable<FabricRecord[]> {
    if (!this.fabrics$) {
      this.fabrics$ = this.http.get<FabricsResponse>(FABRICS_URL).pipe(map((res) => res.records),
      shareReplay({ bufferSize: 1, refCount: true }));
    }
    return this.fabrics$;
    // return this.http.get<FabricsResponse>(FABRICS_URL).pipe(map((res) => res.records));
  }

  getFabric(id: string): Observable<FabricRecord | undefined> {
    return this.getFabrics().pipe(map((fabrics) => fabrics.find((fabric) => fabric.id === id)));
  }
}
