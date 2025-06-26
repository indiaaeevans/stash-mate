import { Component, inject } from '@angular/core';
import { FabricsService } from '../services/fabrics-service';
import { FabricRecord } from '../../models/fabric';
import { Fabric } from '../fabric/fabric';
import {MatChipListboxChange, MatChipsModule} from '@angular/material/chips';
import { map } from 'rxjs';
@Component({
  selector: 'app-fabrics',
  imports: [Fabric, MatChipsModule],
  templateUrl: './fabrics.html',
  styleUrl: './fabrics.scss'
})
export class Fabrics {
  fabricssService = inject(FabricsService);
  fabrics: FabricRecord[] = [];
  types: string[] = ['knit', 'woven'];
  ngOnInit() {
    this.fabricssService.getFabrics().subscribe((fabrics) => {
      this.fabrics = fabrics;
    });
  }
  onFilterChange(event: MatChipListboxChange) {
    this.fabricssService.getFabrics()
    .pipe(map((fabrics: FabricRecord[]) => {
      if (!event.value) {
        return fabrics;
      }
      return fabrics.filter((fabric) => {
        return event.value.includes(fabric.fields.Type)
      })
    }))
    .subscribe((fabrics) => {
      this.fabrics = fabrics;
    });
  }
}
