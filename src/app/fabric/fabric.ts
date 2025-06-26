import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { FabricRecord } from '../../models/fabric';
@Component({
  selector: 'app-fabric',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './fabric.html',
  styleUrl: './fabric.scss'
})
export class Fabric {
  fabric = input.required<FabricRecord>();

}
