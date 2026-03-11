import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentResultComponent} from "./investment-result/investment-result.component";
import {UserInputService} from "./user-input.service";
import {AnnualData} from "./user-input.interface";


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, InvestmentResultComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  public initialInvestment: number = 10000;
  public annualInvestment: number = 1000;
  public expectedReturn: number = 5;
  public duration: number = 10;

  public results: AnnualData[] = [];

  constructor(private userInputService: UserInputService) {

  }

  calculateInvestment() {
    this.results = this.userInputService.calculateUserInvestments(this.initialInvestment,this.annualInvestment,this.expectedReturn,this.duration);
  }

}
