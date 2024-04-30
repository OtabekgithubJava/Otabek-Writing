import { Component } from '@angular/core';
import { Tooltip } from 'tw-elements';
import { Input, initTWE } from "tw-elements";
initTWE({ Input }, { allowReinits: true });

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
