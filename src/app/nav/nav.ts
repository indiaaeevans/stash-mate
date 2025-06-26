import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, MatListModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

}
