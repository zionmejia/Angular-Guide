import {Component, Input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import { inject } from '@angular/core';

import {AnnualData} from "../user-input.interface";

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})

export class InvestmentResultComponent {
  @Input({required: true}) results!: AnnualData[];

}
