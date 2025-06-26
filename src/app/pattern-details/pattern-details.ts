import { Component, inject, OnInit, OnDestroy, input, AfterViewInit } from '@angular/core';
import { MatcherService } from '../services/matcher-service';
import { FabricRecord } from '../../models/fabric';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { PatternsService } from '../services/patterns-service';
import { PatternRecord } from '../../models/pattern';
import { forkJoin, Subscription } from 'rxjs';
import { Pattern } from '../pattern/pattern';
import { Fabric } from '../fabric/fabric';

@Component({
  selector: 'app-pattern-details',
  imports: [Fabric, MatButtonModule, RouterLink],
  templateUrl: './pattern-details.html',
  styleUrl: './pattern-details.scss'
})
export class PatternDetails implements OnInit, OnDestroy {
  matcherService = inject(MatcherService);
  patternsService = inject(PatternsService);
  private activatedRoute = inject(ActivatedRoute);
  fabrics: FabricRecord[] = [];
  pattern: PatternRecord | undefined;

  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.activatedRoute.params.pipe(
      switchMap(params => {
        const id = params['id'];
        if (!id) {
          throw new Error('Pattern ID is required');
        }
        return forkJoin({
          fabrics: this.matcherService.matchPatternToFabrics(id),
          pattern: this.patternsService.getPattern(id)
        });
      })
    ).subscribe({
      next: (result) => {
        this.fabrics = result.fabrics;
        this.pattern = result.pattern;
      },
      error: (error) => {
        console.error('Error loading pattern details:', error);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
