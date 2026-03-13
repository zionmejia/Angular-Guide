import {Component, input, output, signal} from '@angular/core';
import {Ticket} from "../ticket.model";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  public data = input.required<Ticket>()
  public close = output();
  public detailsVisible = signal(false);

  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
  }

  public onMarkAsCompleted() {
    this.close.emit()
  }

}
