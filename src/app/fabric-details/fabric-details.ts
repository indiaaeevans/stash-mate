import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription, switchMap, forkJoin } from 'rxjs';
import { FabricRecord } from '../../models/fabric';
import { PatternRecord } from '../../models/pattern';
import { MatcherService } from '../services/matcher-service';
import { FabricsService } from '../services/fabrics-service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Pattern } from '../pattern/pattern';

@Component({
  selector: 'app-fabric-details',
  imports: [MatCardModule, MatButtonModule, RouterLink, Pattern],
  templateUrl: './fabric-details.html',
  styleUrl: './fabric-details.scss'
})
export class FabricDetails {
  matcherService = inject(MatcherService);
  fabricsService = inject(FabricsService);
  private activatedRoute = inject(ActivatedRoute);
  patterns: PatternRecord[] = [];
  fabric: FabricRecord | undefined;

  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.activatedRoute.params.pipe(
      switchMap(params => {
        const id = params['id'];
        if (!id) {
          throw new Error('Pattern ID is required');
        }
        return forkJoin({
          patterns: this.matcherService.matchFabricToPatterns(id),
          fabric: this.fabricsService.getFabric(id)
        });
      })
    ).subscribe({
      next: (result) => {
        this.fabric = result.fabric;
        this.patterns = result.patterns;
      },
      error: (error) => {
        console.error('Error loading fabric details:', error);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
