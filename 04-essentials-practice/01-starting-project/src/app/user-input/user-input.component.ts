import {Component, signal, WritableSignal} from '@angular/core';
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
  public initialInvestment = signal(10000);
  public annualInvestment = signal(1000);
  public expectedReturn = signal(5);
  public duration = signal(10);

  public results: WritableSignal<AnnualData[]> = signal([]);

  constructor(private userInputService: UserInputService) {

  }

  calculateInvestment() {
    this.results.set(this.userInputService.calculateUserInvestments(this.initialInvestment(), this.annualInvestment(), this.expectedReturn(), this.duration()));
  }

}
